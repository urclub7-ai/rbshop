// Vercel Serverless Function: Silent Server-Side Order Receipt Dispatcher
// Dispatches order receipts directly to Mr. Bakhtiari via CallMeBot WhatsApp Gateway
// without customer involvement or awareness.

const SUPABASE_URL = 'https://qhlnthakoddnnhrigdbc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_KtWJ_9LbuJr_SE387yIbQQ_nOxs2jjm';
const DEFAULT_OWNER_PHONE = '491729343833';

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const payload = req.body || {};

    // 1. Fetch Notification Settings from Supabase
    let ownerPhone = DEFAULT_OWNER_PHONE;
    let callmebotKey = '';

    try {
      const settingsResp = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.__store_notifications__&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      if (settingsResp.ok) {
        const settingsArr = await settingsResp.json();
        if (settingsArr && settingsArr.length > 0) {
          const cfg = settingsArr[0];
          if (cfg.unit) ownerPhone = cfg.unit.replace(/[^0-9]/g, '');
          if (cfg.variant) callmebotKey = cfg.variant.trim();
        }
      }
    } catch (e) {
      console.error('Supabase settings fetch error:', e);
    }

    // Support test call from admin panel
    if (payload.test) {
      const testPhone = (payload.phone || ownerPhone).replace(/[^0-9]/g, '');
      const testKey = (payload.apiKey || callmebotKey || '').trim();
      if (!testKey) {
        return res.status(400).json({ success: false, error: 'CallMeBot API Key is missing. Please enter your API Key.' });
      }
      const testMsg = `🔔 تست اعلان سرور فروشگاه R.B Shop:\nسلام آقای بختیاری! ارتباط سیستم خودکار سرور با واتساپ شما با موفقیت فعال شد. از این پس رسید سفارشات پرداختی مشتریان مستقیماً به اینجا ارسال می‌شود. ✅`;
      const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(testPhone)}&text=${encodeURIComponent(testMsg)}&apikey=${encodeURIComponent(testKey)}`;
      const waResp = await fetch(waUrl);
      const waText = await waResp.text();
      return res.status(200).json({ success: true, callmebotStatus: waResp.status, response: waText });
    }

    // Extract Order Info
    const orderId = payload.orderId || `RB-${Date.now().toString().slice(-6)}`;
    const txId = payload.txId || 'N/A';
    const name = payload.customerName || 'مشتری وبسایت';
    const phone = payload.customerPhone || 'ثبت نشده';
    const address = payload.deliveryAddress || 'آدرس ثبت نشده';
    const items = Array.isArray(payload.items) ? payload.items : [];
    const subtotal = Number(payload.subtotal || 0);
    const shipping = Number(payload.shipping || 0);
    const fee = Number(payload.fee || 0);
    const total = Number(payload.total || (subtotal + shipping + fee));
    const payMethod = payload.payMethod || 'PayPal / Online Card';

    // Format Items List
    let itemsText = '';
    if (items.length > 0) {
      items.forEach(it => {
        const itemTitle = it.title || it.name || 'محصول';
        const qty = it.qty || 1;
        const price = Number(it.price || 0);
        itemsText += `• ${qty}x ${itemTitle} (${(qty * price).toFixed(2)} €)\n`;
      });
    } else {
      itemsText = '• اقلام در دیتابیس ثبت شده است\n';
    }

    // Compose Owner WhatsApp Notification Receipt
    const nowBerlin = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });
    const waReceipt = `🔔 *سفارش جدید پرداخت شده در وبسایت R.B Shop*\n` +
      `--------------------------------\n` +
      `🆔 *شماره سفارش:* ${orderId}\n` +
      `💳 *روش پرداخت:* ${payMethod} (موفقیت‌آمیز ✅)\n` +
      `🧾 *کد پیگیری درگاه (PayPal TxID):* ${txId}\n` +
      `👤 *نام خریدار:* ${name}\n` +
      `📞 *تلفن خریدار:* ${phone}\n` +
      `📍 *آدرس ارسال با پست DHL:*\n${address}\n\n` +
      `📦 *اقلام سفارش داده شده:*\n${itemsText}\n` +
      `💵 *مجموع اقلام:* ${subtotal.toFixed(2)} €\n` +
      `🚚 *هزینه پست DHL:* ${shipping > 0 ? shipping.toFixed(2) + ' €' : 'رایگان 🎁'}\n` +
      `💳 *کارمزد درگاه پرداخت:* ${fee.toFixed(2)} €\n` +
      `💰 *کل مبلغ دریافت شده:* ${total.toFixed(2)} €\n` +
      `⏱ *زمان پرداخت:* ${nowBerlin}\n` +
      `--------------------------------\n` +
      `سفارش در سیستم ثبت شد و آماده بسته‌بندی برای ارسال سریع با پست DHL است.`;

    let whatsappSent = false;
    let whatsappResponse = null;

    // Send WhatsApp via CallMeBot if API key is configured
    if (callmebotKey) {
      try {
        const waUrl = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(ownerPhone)}&text=${encodeURIComponent(waReceipt)}&apikey=${encodeURIComponent(callmebotKey)}`;
        const waResp = await fetch(waUrl);
        whatsappResponse = await waResp.text();
        whatsappSent = waResp.ok;
      } catch (err) {
        console.error('CallMeBot dispatch error:', err);
      }
    }

    // Save order record to Supabase
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify([{
          customer_name: name,
          customer_address: `${address}` + (phone ? ` (Tel: ${phone})` : ''),
          items: items,
          total_price: total,
          status: 'paid_paypal'
        }])
      });
    } catch (sbErr) {
      console.error('Supabase order insert error:', sbErr);
    }

    return res.status(200).json({
      success: true,
      orderId,
      whatsappSent,
      whatsappStatus: callmebotKey ? 'Dispatched via CallMeBot' : 'API Key pending configuration in Admin Panel'
    });

  } catch (error) {
    console.error('Server error in notify-owner:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
