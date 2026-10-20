// ==========================================================================
// R.B SHOP — Comprehensive Multilingual / Internationalization (i18n) Engine
// Supported: English (en - DEFAULT), German (de), French (fr), Dari/Persian (fa), Arabic (ar)
// ==========================================================================

const LANGUAGES = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr', isDefault: true },
  de: { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  fa: { code: 'fa', name: 'Dari / Persian', nativeName: 'فارسی (دری)', flag: '🇦🇫', dir: 'rtl' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' }
};

const UI_TRANSLATIONS = {
  en: {
    page_title: "R.B Shop | Authentic Afghan Dried Fruits, Nuts & Royal Gifts in Germany",
    meta_desc: "R.B Shop by Ramazan Bakhtyary in Büsum, Germany. Premium Qandak almonds, Herat smiling pistachios, wild black pine nuts, shadow-dried raisins, Super Negin saffron and luxury gift boxes with fast DHL shipping across Europe.",
    nav_shop_desc: "Authentic Dried Fruits & Royal Gifts",
    nav_search_ph: "Search royal gift boxes, almonds, pistachios, pine nuts, saffron...",
    nav_wa_btn: "WhatsApp Order",
    mobile_menu_all_products: "All Products & Gift Boxes",
    mobile_menu_contact: "Store Details & German Address",
    hero_seal: "R.B SHOP • Official Store",
    hero_title: "R.B Shop",
    hero_subtitle: "Authentic Afghan Flavors; Premium Quality & Royal Gift Boxes",
    hero_desc: "Official store of Ramazan Bakhtyary. Hand-selected sweet Qandak almonds, Herat smiling pistachios, wild organic Paktia black pine nuts, paper-shell walnuts, shadow-dried raisins, and super Negin saffron, delivered with fast DHL postal tracking across Germany and Europe.",
    hero_chip_owner: "Owner: Ramazan Bakhtyary",
    hero_chip_location: "Büsum, Germany",
    hero_chip_shipping: "Fast DHL & DPD Postal Delivery across Europe",
    hero_cta_products: "Explore Products & Boxes (12 Items)",
    hero_cta_wa: "Order via WhatsApp",
    cat_all: "All Items (12)",
    cat_packages: "Royal Gift Boxes (4)",
    cat_nuts: "Almonds & Nuts (2)",
    cat_pinenuts: "Pistachios & Pine Nuts (2)",
    cat_fruits: "Dried Fruits & Raisins (3)",
    cat_saffron: "Super Negin Saffron (1)",
    cat_status: "12 items and royal packages available",
    search_results_prefix: "Showing",
    search_results_suffix: "items matching",
    btn_buy: "Buy",
    btn_add_to_cart: "Add to Cart",
    btn_wa_quick: "Quick Order on WhatsApp",
    btn_out_of_stock: "Out of Stock",
    price_label: "Price:",
    currency_label: "€",
    currency_full: "Euros (€)",
    toast_added: "has been added to your shopping cart!",
    mobile_bar_title: "Your Shopping Cart",
    mobile_bar_checkout: "Checkout",
    why_us_title: "Why Choose R.B Shop?",
    why_us_sub: "Our commitment is delivering the finest authentic Afghan harvest with top European hygiene and freshness standards.",
    why_feat1_title: "100% Fresh & Organic",
    why_feat1_desc: "Directly sourced from premier orchards in Herat, Paktia, Kandahar, and Kabul, completely free of chemical preservatives.",
    why_feat2_title: "Fast Tracked DHL Shipping",
    why_feat2_desc: "Dispatched directly from Büsum, Germany via DHL & DPD with live tracking numbers across Germany and all EU countries.",
    why_feat3_title: "Hygienic Vacuum Packaging",
    why_feat3_desc: "Aroma-sealed and moisture-proof packaging to ensure crunchiness, fresh natural aroma, and maximum shelf life.",
    tiktok_title: "Follow Us on TikTok",
    tiktok_desc: "Watch daily unboxing videos, cargo arrivals, quality tests, and genuine customer reviews on TikTok.",
    contact_badge: "Official Store Information",
    contact_title: "Official R.B Shop in Germany",
    contact_desc: "For retail and wholesale orders, custom royal boxes, or European shipping inquiries, contact shop management directly.",
    contact_owner_label: "Shop Management:",
    contact_owner_val: "Ramazan Bakhtyary",
    contact_phone_label: "Phone & WhatsApp:",
    contact_address_label: "Official Address in Germany:",
    contact_address_val: "Möllers weg 6, 25761 Büsum",
    contact_email_label: "Email Address:",
    payment_methods_title: "Safe & Convenient Payment Methods:",
    pay_method_paypal: "PayPal",
    pay_method_bank: "German Bank Transfer (IBAN)",
    pay_method_wa: "WhatsApp Inquiries",
    quick_form_title: "Send a Direct Message via WhatsApp",
    quick_form_desc: "Fill out this form to connect directly with Ramazan Bakhtyary on WhatsApp.",
    quick_form_name_label: "Your Full Name:",
    quick_form_name_ph: "e.g. John Doe",
    quick_form_city_label: "Destination City or Country:",
    quick_form_city_ph: "e.g. Hamburg, Paris, Vienna...",
    quick_form_msg_label: "Your Order or Inquiry:",
    quick_form_msg_ph: "Specify the products and quantities you wish to order (e.g. 2kg Qandak Almonds & 1 Royal Box)...",
    quick_form_btn: "Send Direct Message on WhatsApp",
    footer_brand: "R.B SHOP • Official Online Store",
    footer_management: "Management:",
    footer_location: "Büsum, Germany",
    footer_rights: "All Rights Reserved © 2026 R.B Shop • Authentic Afghan Dried Fruits & Royal Gifts in Europe",
    footer_address_line: "Möllers weg 6, 25761 Büsum, Germany",
    cart_drawer_title: "Your Shopping Cart",
    cart_drawer_empty: "Your cart is currently empty!",
    cart_drawer_empty_sub: "Add products or royal gift boxes from our catalog to get started.",
    cart_drawer_badge_items: "items",
    cart_drawer_address_title: "DHL / DPD Postal Delivery Address",
    cart_drawer_address_badge: "Direct Postal Delivery",
    cart_field_name: "Full Name & Surname:",
    cart_field_name_ph: "e.g. John Doe",
    cart_field_phone: "Phone or WhatsApp Number:",
    cart_field_phone_ph: "e.g. 0176 12345678",
    cart_field_street: "Street & House Number (Straße & Hausnr.):",
    cart_field_street_ph: "e.g. Möllers weg 15",
    cart_field_plz: "Postal Code (PLZ):",
    cart_field_plz_ph: "e.g. 25761",
    cart_field_city: "City (Stadt):",
    cart_field_city_ph: "e.g. Büsum / Hamburg",
    cart_field_country: "Country (Land):",
    country_de: "Germany (Deutschland)",
    country_at: "Austria (Österreich)",
    country_ch: "Switzerland (Schweiz)",
    country_nl: "Netherlands (Nederland)",
    country_other: "Other European Countries",
    cart_field_payment: "Preferred Payment Method (Zahlungsmethode):",
    pay_opt_paypal: "💳 PayPal",
    pay_opt_bank: "🏦 German Bank Transfer (IBAN)",
    pay_opt_wa: "💬 Inquire IBAN / PayPal in WhatsApp Chat",
    cart_subtotal: "Subtotal:",
    cart_shipping_fee: "Shipping Cost (DHL / DPD):",
    cart_shipping_calc: "Coordinated on WhatsApp (by weight)",
    cart_total: "Total Amount:",
    cart_checkout_btn: "Buy & Send Order via WhatsApp",
    wa_msg_greeting: "Hello Mr. Bakhtyary, I would like to place an order from R.B Shop:\n\n",
    wa_msg_items_heading: "📦 Ordered Items:\n",
    wa_msg_total_heading: "💰 Total Amount: ",
    wa_msg_addr_heading: "\n📍 Delivery Address (DHL Tracking):\n",
    wa_msg_pay_heading: "\n💳 Payment Method:\n",
    wa_msg_closing: "Please send me your PayPal or IBAN details so I can transfer the payment and receive the parcel. Thank you!",
    validation_addr: "Please provide your Name, Street, Postal Code (PLZ), and City!"
  },

  de: {
    page_title: "R.B Shop | Authentische afghanische Trockenfrüchte, Nüsse & Geschenke in Deutschland",
    meta_desc: "Offizieller R.B Shop von Ramazan Bakhtyary in Büsum, Deutschland. Süße Qandak-Mandeln, lachende Herat-Pistazien, wilde Pinienkerne, schattengereifte Rosinen, Safran und Geschenkboxen mit schnellem DHL-Versand in ganz Europa.",
    nav_shop_desc: "Erlesene Trockenfrüchte & Königliche Geschenke",
    nav_search_ph: "Suche nach königlichen Geschenkboxen, Mandeln, Pistazien, Safran...",
    nav_wa_btn: "WhatsApp Bestellung",
    mobile_menu_all_products: "Alle Produkte & Geschenkboxen",
    mobile_menu_contact: "Geschäftsinformationen & Deutsche Adresse",
    hero_seal: "R.B SHOP • Offizieller Shop",
    hero_title: "R.B Shop",
    hero_subtitle: "Authentischer Geschmack Afghanistans; Erlesene Qualität & Königliche Geschenkboxen",
    hero_desc: "Offizieller Shop von Ramazan Bakhtyary. Handverlesene süße Qandak-Mandeln, Herat-Pistazien, wilde Bio-Paktia-Pinienkerne, dünnschalige Walnüsse, schattengereifte Rosinen und Super-Negin-Safran mit schnellem DHL-Versand in ganz Deutschland und Europa.",
    hero_chip_owner: "Inhaber: Ramazan Bakhtyary",
    hero_chip_location: "Büsum, Deutschland",
    hero_chip_shipping: "Schneller DHL & DPD Paketversand europaweit",
    hero_cta_products: "Produkte & Boxen ansehen (12 Artikel)",
    hero_cta_wa: "Per WhatsApp bestellen",
    cat_all: "Alle Artikel (12)",
    cat_packages: "Königliche Pakete (4)",
    cat_nuts: "Mandeln & Nüsse (2)",
    cat_pinenuts: "Pistazien & Pinienkerne (2)",
    cat_fruits: "Trockenfrüchte & Rosinen (3)",
    cat_saffron: "Super-Negin-Safran (1)",
    cat_status: "12 Artikel und königliche Pakete verfügbar",
    search_results_prefix: "Ergebnisse für",
    search_results_suffix: "gefundene Artikel",
    btn_buy: "Kaufen",
    btn_add_to_cart: "In den Warenkorb",
    btn_wa_quick: "Schnellbestellung via WhatsApp",
    btn_out_of_stock: "Ausverkauft",
    price_label: "Preis:",
    currency_label: "€",
    currency_full: "Euro (€)",
    toast_added: "wurde zum Warenkorb hinzugefügt!",
    mobile_bar_title: "Ihr Warenkorb",
    mobile_bar_checkout: "Zur Kasse",
    why_us_title: "Warum R.B Shop wählen?",
    why_us_sub: "Unser Versprechen: Frischeste Spezialitäten aus Afghanistan nach höchsten europäischen Qualitäts- und Hygienestandards.",
    why_feat1_title: "100% Frisch & Bio",
    why_feat1_desc: "Direkt aus den besten Anbaugebieten in Herat, Paktia, Kandahar und Kabul, frei von chemischen Konservierungsstoffen.",
    why_feat2_title: "Schneller DHL-Paketversand",
    why_feat2_desc: "Versand direkt aus Büsum, Deutschland mit DHL & DPD Sendungsverfolgung in alle europäischen Länder.",
    why_feat3_title: "Hygienische Vakuumverpackung",
    why_feat3_desc: "Aroma- und feuchtigkeitsgeschützt verpackt für langanhaltende Frische, Knackigkeit und besten Geschmack.",
    tiktok_title: "Folgen Sie uns auf TikTok",
    tiktok_desc: "Sehen Sie tägliche Videos zu Warenankünften, Qualitätsprüfungen und echten Kundenerfahrungen auf TikTok.",
    contact_badge: "Offizielle Geschäftsinformationen",
    contact_title: "Offizieller R.B Shop in Deutschland",
    contact_desc: "Für Einzel- und Großhandelsbestellungen, individuelle Geschenkboxen oder Versandfragen kontaktieren Sie uns direkt.",
    contact_owner_label: "Geschäftsführung:",
    contact_owner_val: "Ramazan Bakhtyary",
    contact_phone_label: "Telefon & WhatsApp:",
    contact_address_label: "Offizielle Adresse in Deutschland:",
    contact_address_val: "Möllers weg 6, 25761 Büsum",
    contact_email_label: "E-Mail-Adresse:",
    payment_methods_title: "Sichere & bequeme Zahlungsmethoden:",
    pay_method_paypal: "PayPal",
    pay_method_bank: "Deutsche Banküberweisung (IBAN)",
    pay_method_wa: "Absprache per WhatsApp",
    quick_form_title: "Direktnachricht per WhatsApp senden",
    quick_form_desc: "Füllen Sie das Formular aus, um direkt mit Herrn Bakhtyary auf WhatsApp zu chatten.",
    quick_form_name_label: "Ihr Vor- & Nachname:",
    quick_form_name_ph: "z.B. Max Mustermann",
    quick_form_city_label: "Zielstadt oder Land:",
    quick_form_city_ph: "z.B. Hamburg, Frankfurt, Wien...",
    quick_form_msg_label: "Ihre Bestellung oder Anfrage:",
    quick_form_msg_ph: "Menge und Artikel angeben (z.B. 2kg Qandak-Mandeln & 1 Königliche Box)...",
    quick_form_btn: "Direktnachricht auf WhatsApp senden",
    footer_brand: "R.B SHOP • Offizieller Online-Shop",
    footer_management: "Geschäftsführung:",
    footer_location: "Büsum, Deutschland",
    footer_rights: "Alle Rechte vorbehalten © 2026 R.B Shop • Erlesene afghanische Trockenfrüchte in Europa",
    footer_address_line: "Möllers weg 6, 25761 Büsum, Deutschland",
    cart_drawer_title: "Ihr Warenkorb",
    cart_drawer_empty: "Ihr Warenkorb ist derzeit leer!",
    cart_drawer_empty_sub: "Wählen Sie Produkte oder Geschenkboxen aus unserem Katalog aus.",
    cart_drawer_badge_items: "Artikel",
    cart_drawer_address_title: "DHL / DPD Lieferadresse",
    cart_drawer_address_badge: "Direkter Paketversand",
    cart_field_name: "Vor- & Nachname:",
    cart_field_name_ph: "z.B. Max Mustermann",
    cart_field_phone: "Telefon- oder WhatsApp-Nummer:",
    cart_field_phone_ph: "z.B. 0176 12345678",
    cart_field_street: "Straße & Hausnummer (Straße & Hausnr.):",
    cart_field_street_ph: "z.B. Möllers weg 15",
    cart_field_plz: "Postleitzahl (PLZ):",
    cart_field_plz_ph: "z.B. 25761",
    cart_field_city: "Stadt (Stadt):",
    cart_field_city_ph: "z.B. Büsum / Hamburg",
    cart_field_country: "Land (Land):",
    country_de: "Deutschland (Deutschland)",
    country_at: "Österreich (Österreich)",
    country_ch: "Schweiz (Schweiz)",
    country_nl: "Niederlande (Nederland)",
    country_other: "Andere europäische Länder",
    cart_field_payment: "Bevorzugte Zahlungsmethode (Zahlungsmethode):",
    pay_opt_paypal: "💳 PayPal",
    pay_opt_bank: "🏦 Deutsche Banküberweisung (IBAN)",
    pay_opt_wa: "💬 IBAN / PayPal im WhatsApp-Chat anfragen",
    cart_subtotal: "Zwischensumme:",
    cart_shipping_fee: "Versandkosten (DHL / DPD):",
    cart_shipping_calc: "Wird auf WhatsApp nach Gewicht berechnet",
    cart_total: "Gesamtsumme:",
    cart_checkout_btn: "Bestellung per WhatsApp absenden",
    wa_msg_greeting: "Hallo Herr Bakhtyary, ich möchte gerne folgende Bestellung bei R.B Shop aufgeben:\n\n",
    wa_msg_items_heading: "📦 Bestellte Artikel:\n",
    wa_msg_total_heading: "💰 Gesamtbetrag: ",
    wa_msg_addr_heading: "\n📍 Lieferadresse (DHL Tracking):\n",
    wa_msg_pay_heading: "\n💳 Zahlungsmethode:\n",
    wa_msg_closing: "Bitte senden Sie mir Ihre PayPal-Adresse oder IBAN, damit ich die Überweisung tätigen kann. Vielen Dank!",
    validation_addr: "Bitte geben Sie Ihren Namen, Straße, Postleitzahl (PLZ) und Stadt an!"
  },

  fr: {
    page_title: "R.B Shop | Fruits Secs, Noix & Coffrets Royaux d'Afghanistan en Europe",
    meta_desc: "Boutique officielle R.B Shop par Ramazan Bakhtyary à Büsum, Allemagne. Amandes Qandak, pistaches d'Hérat, pignons de pin noirs, raisins séchés à l'ombre, safran et coffrets cadeaux expédiés par DHL dans toute l'Europe.",
    nav_shop_desc: "Fruits Secs Authentiques & Cadeaux Royaux",
    nav_search_ph: "Rechercher coffrets royaux, amandes, pistaches, safran...",
    nav_wa_btn: "Commande WhatsApp",
    mobile_menu_all_products: "Tous les Produits & Coffrets",
    mobile_menu_contact: "Informations & Adresse en Allemagne",
    hero_seal: "R.B SHOP • Boutique Officielle",
    hero_title: "R.B Shop",
    hero_subtitle: "Saveurs Authentiques d'Afghanistan; Qualité d'Exception & Coffrets Royaux",
    hero_desc: "Boutique officielle de Ramazan Bakhtyary. Amandes douces Qandak sélectionnées à la main, pistaches d'Hérat, pignons de pin noirs sauvages de Paktia, noix à coque fine, raisins séchés à l'ombre et safran Super Negin, expédiés avec suivi DHL dans toute l'Europe.",
    hero_chip_owner: "Gérant: Ramazan Bakhtyary",
    hero_chip_location: "Büsum, Allemagne",
    hero_chip_shipping: "Livraison postale rapide DHL & DPD en Europe",
    hero_cta_products: "Découvrir nos produits & coffrets (12)",
    hero_cta_wa: "Commander sur WhatsApp",
    cat_all: "Tous les articles (12)",
    cat_packages: "Coffrets Royaux (4)",
    cat_nuts: "Amandes & Noix (2)",
    cat_pinenuts: "Pistaches & Pignons (2)",
    cat_fruits: "Fruits Secs & Raisins (3)",
    cat_saffron: "Safran Supérieur (1)",
    cat_status: "12 articles et coffrets royaux disponibles",
    search_results_prefix: "Affichage de",
    search_results_suffix: "articles correspondants",
    btn_buy: "Acheter",
    btn_add_to_cart: "Ajouter au Panier",
    btn_wa_quick: "Commande rapide WhatsApp",
    btn_out_of_stock: "Rupture de stock",
    price_label: "Prix:",
    currency_label: "€",
    currency_full: "Euros (€)",
    toast_added: "a été ajouté à votre panier !",
    mobile_bar_title: "Votre Panier",
    mobile_bar_checkout: "Valider l'achat",
    why_us_title: "Pourquoi choisir R.B Shop ?",
    why_us_sub: "Notre engagement: vous livrer les meilleurs trésors du terroir afghan selon les normes européennes d'hygiène les plus strictes.",
    why_feat1_title: "100% Frais & Naturel",
    why_feat1_desc: "Sélectionné directement dans les vergers réputés d'Hérat, Paktia, Kandahar et Kaboul, sans conservateurs chimiques.",
    why_feat2_title: "Expédition Rapide avec Suivi DHL",
    why_feat2_desc: "Expédié depuis Büsum en Allemagne par DHL et DPD avec numéro de suivi en direct vers tous les pays européens.",
    why_feat3_title: "Emballage Sous Vide Hygiénique",
    why_feat3_desc: "Conditionnement étanche et protecteur préservant la fraîcheur, le croquant et les arômes naturels jusqu'à la dégustation.",
    tiktok_title: "Suivez-nous sur TikTok",
    tiktok_desc: "Découvrez nos vidéos quotidiennes d'arrivage, de contrôle qualité et les avis vérifiés de nos clients sur TikTok.",
    contact_badge: "Informations Officielles",
    contact_title: "Boutique officielle R.B Shop en Allemagne",
    contact_desc: "Pour toute commande de détail ou de gros, coffret sur-mesure ou information de livraison, contactez directement la direction.",
    contact_owner_label: "Direction du magasin:",
    contact_owner_val: "Ramazan Bakhtyary",
    contact_phone_label: "Téléphone & WhatsApp:",
    contact_address_label: "Adresse officielle en Allemagne:",
    contact_address_val: "Möllers weg 6, 25761 Büsum",
    contact_email_label: "Adresse e-mail:",
    payment_methods_title: "Modes de paiement sécurisés et pratiques:",
    pay_method_paypal: "PayPal",
    pay_method_bank: "Virement bancaire allemand (IBAN)",
    pay_method_wa: "Coordination sur WhatsApp",
    quick_form_title: "Envoyer un message direct sur WhatsApp",
    quick_form_desc: "Remplissez ce formulaire pour être mis en relation directe avec Ramazan Bakhtyary sur WhatsApp.",
    quick_form_name_label: "Votre nom et prénom:",
    quick_form_name_ph: "ex. Jean Dupont",
    quick_form_city_label: "Ville ou pays de destination:",
    quick_form_city_ph: "ex. Paris, Lyon, Bruxelles...",
    quick_form_msg_label: "Votre commande ou demande:",
    quick_form_msg_ph: "Précisez les produits et quantités (ex. 2kg d'amandes Qandak et 1 Coffret Royal)...",
    quick_form_btn: "Envoyer le message sur WhatsApp",
    footer_brand: "R.B SHOP • Boutique Officielle en Ligne",
    footer_management: "Direction:",
    footer_location: "Büsum, Allemagne",
    footer_rights: "Tous droits réservés © 2026 R.B Shop • Fruits secs et cadeaux afghans d'exception en Europe",
    footer_address_line: "Möllers weg 6, 25761 Büsum, Allemagne",
    cart_drawer_title: "Votre Panier d'Achat",
    cart_drawer_empty: "Votre panier est actuellement vide !",
    cart_drawer_empty_sub: "Parcourez nos produits et coffrets cadeaux pour ajouter des articles.",
    cart_drawer_badge_items: "articles",
    cart_drawer_address_title: "Adresse de Livraison Postale DHL / DPD",
    cart_drawer_address_badge: "Envoi Postal Direct",
    cart_field_name: "Nom et prénom:",
    cart_field_name_ph: "ex. Jean Dupont",
    cart_field_phone: "Numéro de téléphone ou WhatsApp:",
    cart_field_phone_ph: "ex. 06 12 34 56 78",
    cart_field_street: "Rue et numéro de maison (Straße & Hausnr.):",
    cart_field_street_ph: "ex. Möllers weg 15",
    cart_field_plz: "Code postal (PLZ):",
    cart_field_plz_ph: "ex. 25761",
    cart_field_city: "Ville (Stadt):",
    cart_field_city_ph: "ex. Büsum / Paris",
    cart_field_country: "Pays (Land):",
    country_de: "Allemagne (Deutschland)",
    country_at: "Autriche (Österreich)",
    country_ch: "Suisse (Schweiz)",
    country_nl: "Pays-Bas (Nederland)",
    country_other: "Autres pays européens",
    cart_field_payment: "Mode de paiement souhaité (Zahlungsmethode):",
    pay_opt_paypal: "💳 PayPal",
    pay_opt_bank: "🏦 Virement bancaire allemand (IBAN)",
    pay_opt_wa: "💬 Demander l'IBAN / PayPal sur WhatsApp",
    cart_subtotal: "Sous-total:",
    cart_shipping_fee: "Frais de livraison (DHL / DPD):",
    cart_shipping_calc: "Calculés sur WhatsApp selon le poids",
    cart_total: "Total général:",
    cart_checkout_btn: "Acheter et envoyer la commande sur WhatsApp",
    wa_msg_greeting: "Bonjour M. Bakhtyary, je souhaite passer la commande suivante sur R.B Shop :\n\n",
    wa_msg_items_heading: "📦 Articles commandés :\n",
    wa_msg_total_heading: "💰 Montant total : ",
    wa_msg_addr_heading: "\n📍 Adresse de livraison (Suivi DHL) :\n",
    wa_msg_pay_heading: "\n💳 Mode de paiement :\n",
    wa_msg_closing: "Merci de m'indiquer vos coordonnées PayPal ou IBAN pour effectuer le virement et recevoir le colis. Cordialement !",
    validation_addr: "Veuillez renseigner votre Nom, Rue, Code Postal (PLZ) et Ville !"
  },

  fa: {
    page_title: "R.B Shop | فروشگاه میوه خشک و سوغات اصیل افغانستان در آلمان و اروپا",
    meta_desc: "فروشگاه رسمی R.B Shop با مدیریت رمضان بختیاری در آلمان (بوسوم). عرضه اعلاترین بادام قندک، پسته خندان هرات، جلغوزه سیاه، کشمش سایگی، زعفران و پکیج‌های کادویی با ارسال سریع DHL به سراسر اروپا.",
    nav_shop_desc: "فروشگاه میوه خشک اصیل و سوغات",
    nav_search_ph: "جستجوی پکیج، بادام، پسته، جلغوزه، کشمش، زعفران...",
    nav_wa_btn: "سفارش واتساپ",
    mobile_menu_all_products: "تمام محصولات و پکیج‌ها",
    mobile_menu_contact: "مشخصات و آدرس فروشگاه",
    hero_seal: "R.B SHOP • رسمی",
    hero_title: "R.B Shop",
    hero_subtitle: "اصیل‌ترین طعم افغانستان؛ تازه‌ترین کیفیت و پکیج‌های شاهانه",
    hero_desc: "فروشگاه رسمی رمضان بختیاری؛ گلچینی از بهترین بادام قندک شیرین، پسته خندان هرات، جلغوزه سیاه ارگانیک پکتیا، چهارمغز کاغذی، کشمش سایگی و زعفران ناب با ارسال سریع پستی DHL به سراسر آلمان و اروپا.",
    hero_chip_owner: "مدیریت: رمضان بختیاری",
    hero_chip_location: "Büsum, Germany",
    hero_chip_shipping: "ارسال پستی DHL به تمام اروپا",
    hero_cta_products: "مشاهده و خرید محصولات (۱۲ قلم)",
    hero_cta_wa: "سفارش سریع در واتساپ",
    cat_all: "همه اقلام (۱۲)",
    cat_packages: "پکیج‌های شاهانه (۴)",
    cat_nuts: "بادام و مغزیجات (۲)",
    cat_pinenuts: "پسته و جلغوزه (۲)",
    cat_fruits: "کشمش و میوه خشک (۳)",
    cat_saffron: "زعفران اعلا (۱)",
    cat_status: "تعداد ۱۲ قلم کالا و پکیج موجود",
    search_results_prefix: "نمایش",
    search_results_suffix: "قلم منطبق با جستجو",
    btn_buy: "خرید",
    btn_add_to_cart: "افزودن به سبد",
    btn_wa_quick: "سفارش سریع در واتساپ",
    btn_out_of_stock: "ناموجود",
    price_label: "قیمت:",
    currency_label: "€",
    currency_full: "یورو (€)",
    toast_added: "به سبد خرید اضافه شد!",
    mobile_bar_title: "سبد خرید شما",
    mobile_bar_checkout: "تکمیل خرید",
    why_us_title: "دلایل انتخاب R.B Shop",
    why_us_sub: "تعهد ما، تحویل باکیفیت‌ترین محصولات وطن با بالاترین استانداردهای بهداشتی به هم‌وطنان عزیز در تمام اروپا است.",
    why_feat1_title: "۱۰۰٪ تازه و ارگانیک",
    why_feat1_desc: "محصولات ما مستقیماً از باغات و مراکز اصلی میوه خشک افغانستان (هرات، پکتیا، قندهار، خوست و کابل) تهیه شده و بدون نگه‌دارنده‌های کیمیاوی عرضه می‌شود.",
    why_feat2_title: "ارسال سریع و پیگیری پستی",
    why_feat2_desc: "کلیه سفارشات از مبدأ آلمان (شهر Büsum) از طریق شرکت‌های معتبر پست DHL و DPD همراه با کد رهگیری لحظه‌ای به تمام نقاط اروپا ارسال می‌گردد.",
    why_feat3_title: "بسته‌بندی بهداشتی و وکیوم",
    why_feat3_desc: "تمامی بارها در بسته‌بندی‌های بهداشتی، عایق رطوبت و وکیوم شده آماده می‌شوند تا طعم ترد، تازگی و بوی خوش میوه خشک تا زمان مصرف کاملاً حفظ شود.",
    tiktok_title: "ما را در تیک‌تاک دنبال کنید",
    tiktok_desc: "مشاهده ویدیوهای روزانه کیفیت اجناس، باز کردن بارها و رضایت مشتریان محترم در تیک‌تاک.",
    contact_badge: "مشخصات و اطلاعات رسمی فروشگاه",
    contact_title: "فروشگاه R.B Shop در آلمان",
    contact_desc: "جهت ثبت سفارش عمده و خرده، استعلام موجودی پکیج‌های خاص، یا هرگونه هماهنگی ارسال به شهرهای آلمان و خارج از آلمان، می‌توانید از راه‌های زیر مستقیماً با مدیریت فروشگاه تماس حاصل فرمایید.",
    contact_owner_label: "مدیریت فروشگاه:",
    contact_owner_val: "رمضان بختیاری",
    contact_phone_label: "تماس تلفنی و واتساپ:",
    contact_address_label: "آدرس رسمی در آلمان:",
    contact_address_val: "Möllers weg 6, 25761 Büsum",
    contact_email_label: "پست الکترونیکی (ایمیل):",
    payment_methods_title: "روش‌های پرداخت مطمئن و آسان:",
    pay_method_paypal: "پی‌پال (PayPal)",
    pay_method_bank: "واریز بانکی آلمان",
    pay_method_wa: "هماهنگی در واتساپ",
    quick_form_title: "ارسال پیام سریع به واتساپ",
    quick_form_desc: "فرم را پر کنید تا مستقیماً به صفحه گفتگوی واتساپ رمضان بختیاری منتقل شوید.",
    quick_form_name_label: "نام و تخلص شما:",
    quick_form_name_ph: "مثال: احمد رحیمی",
    quick_form_city_label: "شهر یا کشور مقصد:",
    quick_form_city_ph: "مثال: هامبورگ، فرانکفورت، ویانا...",
    quick_form_msg_label: "سفارش یا پیام شما:",
    quick_form_msg_ph: "میزان یا نام اقلام مورد نظرتان را بنویسید (مثلاً ۲ کیلو بادام قندک و ۱ پکیج شاهانه)...",
    quick_form_btn: "ارسال مستقیم پیام در واتساپ",
    footer_brand: "R.B SHOP • فروشگاه آر بی شاپ",
    footer_management: "مدیریت:",
    footer_location: "Büsum, Deutschland",
    footer_rights: "تمامی حقوق محفوظ است © ۲۰۲۶ فروشگاه R.B Shop • عرضه اصیل‌ترین میوه خشک افغانستان در اروپا",
    footer_address_line: "Möllers weg 6, 25761 Büsum, Germany",
    cart_drawer_title: "سبد خرید شما",
    cart_drawer_empty: "سبد خرید شما فعلاً خالی است!",
    cart_drawer_empty_sub: "محصولات یا پکیج‌های مورد نظرتان را انتخاب و اضافه نمایید.",
    cart_drawer_badge_items: "قلم",
    cart_drawer_address_title: "آدرس تحویل پستی (DHL / DPD)",
    cart_drawer_address_badge: "ارسال مستقیم با پست",
    cart_field_name: "نام و تخلص:",
    cart_field_name_ph: "مثال: احمد رحیمی",
    cart_field_phone: "شماره تماس یا واتساپ:",
    cart_field_phone_ph: "مثال: 0176 12345678",
    cart_field_street: "خیابان و شماره پلاک خانه (Straße & Hausnr.):",
    cart_field_street_ph: "مثال: Möllers weg 15",
    cart_field_plz: "کد پستی (PLZ):",
    cart_field_plz_ph: "مثال: 25761",
    cart_field_city: "شهر (Stadt):",
    cart_field_city_ph: "مثال: Büsum / Hamburg",
    cart_field_country: "کشور (Land):",
    country_de: "آلمان (Deutschland)",
    country_at: "اتریش (Österreich)",
    country_ch: "سوئیس (Schweiz)",
    country_nl: "هلند (Nederland)",
    country_other: "سایر کشورهای اروپا",
    cart_field_payment: "روش پرداخت ترجیحی (Zahlungsmethode):",
    pay_opt_paypal: "💳 پی‌پال (PayPal)",
    pay_opt_bank: "🏦 کارت به کارت / حساب بانکی آلمان (IBAN)",
    pay_opt_wa: "💬 استعلام شماره حساب یا پی‌پال در چت واتساپ",
    cart_subtotal: "مجموع اقلام:",
    cart_shipping_fee: "هزینه ارسال پستی (DHL / DPD):",
    cart_shipping_calc: "هماهنگی در واتساپ (بر اساس وزن)",
    cart_total: "مجموع کل:",
    cart_checkout_btn: "خرید و ارسال سفارش در واتساپ",
    wa_msg_greeting: "سلام جناب بختیاری عزیز، سفارش داشتم:\n\n",
    wa_msg_items_heading: "📦 اقلام سفارش:\n",
    wa_msg_total_heading: "\n💰 مجموع کل: ",
    wa_msg_addr_heading: "\n📍 آدرس تحویل پستی (DHL):\n",
    wa_msg_pay_heading: "\n💳 روش پرداخت (Zahlungsmethode):\n",
    wa_msg_closing: "لطفاً بفرمایید به چه شماره حساب یا پی‌پالی واریز کنم تا فوراً ارسال فرمایید. تشکر!",
    validation_addr: "لطفاً نام، خیابان، کد پستی (PLZ) و شهر خود را وارد فرمایید!"
  },

  ar: {
    page_title: "R.B Shop | متجر المكسرات والفواكه المجففة الأفغانية الأصيلة في ألمانيا وأوروبا",
    meta_desc: "المتجر الرسمي R.B Shop بإدارة رمضان بختياري في بيسوم، ألمانيا. تشكيلة فاخرة من لوز قندك، فستق هرات، صنوبر أسود، كشمش الظل، زعفران سوبر نقين وصناديق هدايا مع شحن سريع عبر DHL إلى كل أوروبا.",
    nav_shop_desc: "فواكه مجففة أفغانية وهدايا ملكية",
    nav_search_ph: "ابحث عن الصناديق الملكية، اللوز، الفستق، الصنوبر، الزعفران...",
    nav_wa_btn: "طلب عبر واتساب",
    mobile_menu_all_products: "جميع المنتجات والباقات الملكية",
    mobile_menu_contact: "تفاصيل وعنوان المتجر في ألمانيا",
    hero_seal: "R.B SHOP • رسمي",
    hero_title: "R.B Shop",
    hero_subtitle: "أصالة النكهة الأفغانية؛ أعلى درجات الجودة وصناديق الهدايا الملكية",
    hero_desc: "المتجر الرسمي لـ رمضان بختياري؛ تشكيلة فاخرة من لوز قندك الحلو، فستق هرات المبتسم، صنوبر بكتيا الأسود البري، جوز ورقي فاخر، كشمش الظل وزعفران سوبر نقين، مع شحن سريع ومضمون عبر DHL في جميع أنحاء ألمانيا وأوروبا.",
    hero_chip_owner: "إدارة المتجر: رمضان بختياري",
    hero_chip_location: "بيسوم، ألمانيا",
    hero_chip_shipping: "شحن بريدي سريع عبر DHL إلى كل أوروبا",
    hero_cta_products: "استعراض المنتجات والصناديق (١٢ صنف)",
    hero_cta_wa: "طلب سريع عبر واتساب",
    cat_all: "جميع الأصناف (١٢)",
    cat_packages: "الباقات الملكية (٤)",
    cat_nuts: "اللوز والمكسرات (٢)",
    cat_pinenuts: "الفستق والصنوبر (٢)",
    cat_fruits: "الفواكه المجففة والكشمش (٣)",
    cat_saffron: "زعفران فاخر (١)",
    cat_status: "تتوفر ١٢ سلعة وباقة فاخرة",
    search_results_prefix: "عرض",
    search_results_suffix: "أصناف مطابقة للبحث",
    btn_buy: "شراء",
    btn_add_to_cart: "إضافة إلى السلة",
    btn_wa_quick: "طلب سريع عبر واتساب",
    btn_out_of_stock: "نفدت الكمية",
    price_label: "السعر:",
    currency_label: "€",
    currency_full: "يورو (€)",
    toast_added: "تمت إضافته إلى سلة المشتريات بنجاح!",
    mobile_bar_title: "سلة مشترياتك",
    mobile_bar_checkout: "إتمام الشراء",
    why_us_title: "لماذا تختار متجر R.B Shop؟",
    why_us_sub: "التزامنا الدائم بتقديم أجود ثمار ومكسرات أفغانستان الأصيلة بأعلى معايير النظافة والجودة الأوروبية.",
    why_feat1_title: "طازج وعضوي ١٠٠٪",
    why_feat1_desc: "يتم جلب محاصيلنا مباشرة من بساتين هرات وبكتيا وقندهار وكابول الأصلية بدون أي مواد حافظة كيميائية.",
    why_feat2_title: "شحن سريع مع رقم تتبع DHL",
    why_feat2_desc: "يتم إرسال كافة الطلبيات مباشرة من بيسوم في ألمانيا عبر DHL و DPD مع كود تتبع فوري لجميع دول أوروبا.",
    why_feat3_title: "تغليف صحي مفرغ من الهواء (فاكيوم)",
    why_feat3_desc: "تغليف محكم وعازل للرطوبة للحفاظ على القرمشة الطازجة والرائحة الزكية والمذاق الأصيل حتى لحظة الاستهلاك.",
    tiktok_title: "تابعونا على تيك توك",
    tiktok_desc: "شاهدوا فيديوهاتنا اليومية لفتح الشحنات وفحص الجودة وتجارب الزبائن الكرام على تيك توك.",
    contact_badge: "معلومات وبيانات المتجر الرسمية",
    contact_title: "المقر الرسمي لمتجر R.B Shop في ألمانيا",
    contact_desc: "لطلبات الجملة والمفرق أو الاستفسار عن باقات الهدايا الخاصة والشحن إلى أوروبا، تواصلوا مباشرة مع إدارة المتجر.",
    contact_owner_label: "إدارة المتجر:",
    contact_owner_val: "رمضان بختياري",
    contact_phone_label: "الاتصال والواتساب:",
    contact_address_label: "العنوان الرسمي في ألمانيا:",
    contact_address_val: "Möllers weg 6, 25761 Büsum",
    contact_email_label: "البريد الإلكتروني:",
    payment_methods_title: "طرق دفع سهلة وآمنة:",
    pay_method_paypal: "باي بال (PayPal)",
    pay_method_bank: "تحويل بنكي في ألمانيا (IBAN)",
    pay_method_wa: "تنسيق عبر الواتساب",
    quick_form_title: "إرسال رسالة مباشرة إلى الواتساب",
    quick_form_desc: "املأ النموذج للتواصل مباشرة مع رمضان بختياري في محادثة الواتساب.",
    quick_form_name_label: "الاسم واللقب:",
    quick_form_name_ph: "مثال: أحمد رحيمي",
    quick_form_city_label: "المدينة أو بلد الوجهة:",
    quick_form_city_ph: "مثال: هامبورغ، برلين، باريس...",
    quick_form_msg_label: "تفاصيل الطلب أو الرسالة:",
    quick_form_msg_ph: "حدد الأصناف والكميات المطلوبة (مثال: ٢ كغ لوز قندك وصندوق ملكي)...",
    quick_form_btn: "إرسال الرسالة إلى الواتساب",
    footer_brand: "R.B SHOP • المتجر الإلكتروني الرسمي",
    footer_management: "الإدارة:",
    footer_location: "بيسوم، ألمانيا",
    footer_rights: "جميع الحقوق محفوظة © ٢٠٢٦ متجر R.B Shop • أرقى الفواكه المجففة والمكسرات الأفغانية في أوروبا",
    footer_address_line: "Möllers weg 6, 25761 Büsum, Germany",
    cart_drawer_title: "سلة مشترياتك",
    cart_drawer_empty: "سلة المشتريات فارغة حالياً!",
    cart_drawer_empty_sub: "تفضل باختيار المنتجات أو الباقات الملكية لإضافتها إلى السلة.",
    cart_drawer_badge_items: "أصناف",
    cart_drawer_address_title: "عنوان التسليم البريدي (DHL / DPD)",
    cart_drawer_address_badge: "شحن بريدي مباشر ومضمون",
    cart_field_name: "الاسم واللقب:",
    cart_field_name_ph: "مثال: أحمد رحيمي",
    cart_field_phone: "رقم الهاتف أو الواتساب:",
    cart_field_phone_ph: "مثال: 0176 12345678",
    cart_field_street: "الشارع ورقم المنزل (Straße & Hausnr.):",
    cart_field_street_ph: "مثال: Möllers weg 15",
    cart_field_plz: "الرمز البريدي (PLZ):",
    cart_field_plz_ph: "مثال: 25761",
    cart_field_city: "المدينة (Stadt):",
    cart_field_city_ph: "مثال: Büsum / Hamburg",
    cart_field_country: "الدولة (Land):",
    country_de: "ألمانيا (Deutschland)",
    country_at: "النمسا (Österreich)",
    country_ch: "سويسرا (Schweiz)",
    country_nl: "هولندا (Nederland)",
    country_other: "دول أوروبية أخرى",
    cart_field_payment: "طريقة الدفع المفضلة (Zahlungsmethode):",
    pay_opt_paypal: "💳 باي بال (PayPal)",
    pay_opt_bank: "🏦 تحويل بنكي / حساب ألمانيا (IBAN)",
    pay_opt_wa: "💬 استفسار عن رقم الحساب أو الباي بال في الواتساب",
    cart_subtotal: "مجموع الأصناف:",
    cart_shipping_fee: "تكلفة الشحن (DHL / DPD):",
    cart_shipping_calc: "تنسيق في الواتساب (حسب الوزن)",
    cart_total: "المجموع الكلي:",
    cart_checkout_btn: "شراء وإرسال الطلب عبر الواتساب",
    wa_msg_greeting: "مرحباً سيد بختياري، أود تقديم طلبية من متجر R.B Shop:\n\n",
    wa_msg_items_heading: "📦 الأصناف المطلوبة:\n",
    wa_msg_total_heading: "\n💰 المجموع الكلي: ",
    wa_msg_addr_heading: "\n📍 عنوان التسليم البريدي (DHL):\n",
    wa_msg_pay_heading: "\n💳 طريقة الدفع:\n",
    wa_msg_closing: "يرجى تزويدي برقم الحساب البنكي أو الباي بال لإتمام التحويل وشحن الطلبية فوراً. شكراً جزيلاً!",
    validation_addr: "يرجى إدخال الاسم والشارع والرمز البريدي (PLZ) والمدينة!"
  }
};

const PRODUCT_TRANSLATIONS = {
  pkg1: {
    en: {
      title: "Royal Afghan Mixed Dried Fruits & Nuts Gift Box",
      unit: "1.2kg Box • Royal Luxury Package",
      desc: "8 supreme delicacies: pistachios, Qandak almonds, walnuts, shade-dried raisins, apricots & sweet figs"
    },
    de: {
      title: "Königliche Geschenkkiste afghanischer Trockenfrüchte",
      unit: "1,2kg Box • Königliches Luxus-Paket",
      desc: "8 erlesene Sorten: Pistazien, Qandak-Mandeln, Walnüsse, Rosinen, Aprikosen und Feigen"
    },
    fr: {
      title: "Coffret Cadeau Royal de Fruits Secs & Noix d'Afghanistan",
      unit: "Boîte de 1,2 kg • Coffret Royal de Luxe",
      desc: "8 produits d'exception: pistaches, amandes Qandak, noix, raisins noirs, abricots et figues douces"
    },
    fa: {
      title: "مخلوط شاهانه میوه خشک و مغزیجات",
      unit: "بسته ۱.۲ کیلو • شاهانه",
      desc: "۸ قلم اعلا: پسته، بادام قندک، چهارمغز، کشمش، قیسی و انجیر"
    },
    ar: {
      title: "الصندوق الملكي للمكسرات والفواكه المجففة الفاخرة",
      unit: "علبة ١.٢ كغ • باقة ملكية فاخرة",
      desc: "٨ أصناف ملكية: فستق، لوز قندك، جوز، كشمش الظل، مشمش وتين عسلي"
    }
  },

  pkg2: {
    en: {
      title: "R.B Luxury Eid & Hospitality Mix Box",
      unit: "1kg Box • Luxury Hospitality",
      desc: "Special blend of paper-shell almonds, smiling pistachios, walnut halves, and royal green raisins"
    },
    de: {
      title: "R.B Festtags- & Gäste-Mix Box",
      unit: "1kg Box • Edle Gastfreundschaft",
      desc: "Exklusive Mischung aus Knackmandeln, Herat-Pistazien, Walnüssen und grünen Rosinen"
    },
    fr: {
      title: "Coffret Fête & Réception d'Exception R.B",
      unit: "Boîte de 1 kg • Hospitalité de Prestige",
      desc: "Mélange raffiné d'amandes à coque fine, pistaches d'Hérat, cerneaux de noix et raisins verts royaux"
    },
    fa: {
      title: "پکیج عیدانه و مهمانی آر بی",
      unit: "بسته ۱ کیلو • پذیرایی لوکس",
      desc: "مخلوط بادام کاغذی، پسته خندان، چهارمغز و کشمش سبز اعلا"
    },
    ar: {
      title: "باقة العيد والضيافة الراقية من آر بي",
      unit: "علبة ١ كغ • ضيافة فاخرة",
      desc: "مزيج فاخر من اللوز الورقي، الفستق المبتسم، الجوز المقرمش والكشمش الأخضر الملكي"
    }
  },

  pkg3: {
    en: {
      title: "Pure Vitality & Organic Health Mix",
      unit: "1kg Box • 100% Organic & Raw",
      desc: "Raw sweet almond kernels, pistachio kernels, white walnut halves, and organic dried white mulberries"
    },
    de: {
      title: "Vitalitäts- & Bio-Energie Mix",
      unit: "1kg Box • 100% Natürlich & Roh",
      desc: "Rohe süße Mandelkerne, Pistazienkerne, Walnusshälften und sonnengereifte Bio-Maulbeeren"
    },
    fr: {
      title: "Mélange Vitalité & Énergie Pure",
      unit: "Boîte de 1 kg • 100% Bio & Naturel",
      desc: "Amandes douces crues, pistaches émondées, cerneaux de noix et mûres blanches bio séchées"
    },
    fa: {
      title: "پکیج سلامتی و انرژی طبیعی",
      unit: "بسته ۱ کیلو • ۱۰۰٪ طبیعی",
      desc: "مغز بادام شیرین خام، مغز پسته، مغز چهارمغز و توت ارگانیک"
    },
    ar: {
      title: "باقة الحيوية والطاقة الطبيعية العضوية",
      unit: "علبة ١ كغ • طبيعي ١٠٠٪",
      desc: "لب لوز حلو نيء، لب فستق، أنصاف جوز أبيض وتوت مجفف عضوي بدون سكر"
    }
  },

  pkg4: {
    en: {
      title: "VIP Wild Black Pine Nuts & Herat Pistachios",
      unit: "1kg Box • VIP Luxury Selection",
      desc: "500g wild black pine nuts from Paktia & Khost + 500g jumbo smiling roasted pistachios from Herat"
    },
    de: {
      title: "VIP Schwarze Pinienkerne & Herat-Pistazien",
      unit: "1kg Box • VIP Luxus-Auswahl",
      desc: "500g wilde schwarze Paktia-Pinienkerne + 500g geröstete Herat-Edelpistazien"
    },
    fr: {
      title: "Coffret VIP Pignons Noirs Sauvages & Pistaches d'Hérat",
      unit: "Boîte de 1 kg • Sélection VIP d'Exception",
      desc: "500g de pignons de pin noirs sauvages de Paktia + 500g de pistaches géantes grillées d'Hérat"
    },
    fa: {
      title: "پکیج VIP جلغوزه و پسته هرات",
      unit: "بسته ۱ کیلو • مجلل VIP",
      desc: "۵۰۰ گرم جلغوزه سیاه کابل و پکتیا + ۵۰۰ گرم پسته درشت هرات"
    },
    ar: {
      title: "باقة VIP صنوبر أسود بري وفستق هرات الفاخر",
      unit: "علبة ١ كغ • تشكيلة VIP ملكية",
      desc: "٥٠٠ غرام صنوبر أسود بري من بكتيا وخوست + ٥٠٠ غرام فستق هرات جامبو محمص"
    }
  },

  p1: {
    en: {
      title: "Hand-Picked Qandak Sweet Almonds",
      unit: "1kg Net Weight",
      desc: "Ultra-thin paper shell cracked effortlessly by hand; sweet, crunchy and rich in natural oil"
    },
    de: {
      title: "Handverlesene Qandak-Süßmandeln",
      unit: "1kg Netto",
      desc: "Papierschale mühelos von Hand zu knacken; süß, aromatisch und reich an natürlichen Ölen"
    },
    fr: {
      title: "Amandes Douces Qandak Triées à la Main",
      unit: "1 kg Net",
      desc: "Coque papier fine facile à casser à la main; croquantes, douces et riches en saveur naturelle"
    },
    fa: {
      title: "بادام قندک اعلای دست‌چین",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "پوست نازک کاغذی با شکستن آسان با دست، مغز شیرین و پرچرب"
    },
    ar: {
      title: "لوز قندك الحلو النخب الأول",
      unit: "الوزن الصافي: ١ كغ",
      desc: "قشرة ورقية رقيقة سهلة الكسر باليد، حبات حلوة ومقرمشة وغنية بالزيوت الطبيعية"
    }
  },

  p2: {
    en: {
      title: "Premium Smiling Pistachios (Herat)",
      unit: "1kg Net Weight",
      desc: "Jumbo naturally opened Herat pistachios with crispy roasted texture and rich authentic taste"
    },
    de: {
      title: "Herat Edel-Pistazien (Lachend)",
      unit: "1kg Netto",
      desc: "Natürlich geöffnete Riesenpistazien aus Herat mit herrlich röscher Textur und feinem Geschmack"
    },
    fr: {
      title: "Pistaches Riant d'Hérat d'Exception",
      unit: "1 kg Net",
      desc: "Pistaches géantes naturellement ouvertes d'Hérat, texture parfaitement grillée et goût authentique"
    },
    fa: {
      title: "پسته خندان ممتاز هرات",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "پسته درشت و خندان هرات با بافت برشته و طعم ناب طبیعی"
    },
    ar: {
      title: "فستق هرات الفاخر المبتسم",
      unit: "الوزن الصافي: ١ كغ",
      desc: "فستق جامبو مفتوح طبيعياً من بساتين هرات، محمص بقوام مقرمش ونكهة فريدة"
    }
  },

  p3: {
    en: {
      title: "Wild Organic Black Pine Nuts (Paktia)",
      unit: "500g Net Weight",
      desc: "Rare wild organic black pine nuts; elongated glossy kernels with deeply satisfying aroma"
    },
    de: {
      title: "Wilde Bio-Pinienkerne Schwarz (Paktia)",
      unit: "500g Netto",
      desc: "Seltene biologische schwarze Pinienkerne; lange glänzende Kerne mit unvergleichlichem Aroma"
    },
    fr: {
      title: "Pignons de Pin Noirs Sauvages de Paktia",
      unit: "500g Net",
      desc: "Pignons noirs sauvages et bio rares; grains allongés brillants au parfum boisé exquis"
    },
    fa: {
      title: "جلغوزه سیاه پکتیا و خوست",
      unit: "واحد: ۵۰۰ گرم خالص",
      desc: "جلغوزه سیاه ارگانیک اعلا، دانه‌های درشت کشیده و روغنی"
    },
    ar: {
      title: "صنوبر بكتيا وخوست الأسود البري",
      unit: "الوزن الصافي: ٥٠٠ غرام",
      desc: "صنوبر أسود بري عضوي نادر، حبات ممتلئة وطويلة ذات عبير زيتي فواح"
    }
  },

  p4: {
    en: {
      title: "Fresh Paper-Shell White Walnuts",
      unit: "1kg Net Weight",
      desc: "Delicate paper shell cracked easily by hand; large creamy white and nutrient-dense kernels"
    },
    de: {
      title: "Dünnschalige Weiße Walnüsse",
      unit: "1kg Netto",
      desc: "Dünne Schale leicht von Hand zu knacken; helle, vollmundige und energiereiche Nusskerne"
    },
    fr: {
      title: "Noix Blanches à Coque Fine",
      unit: "1 kg Net",
      desc: "Coque papier facile à casser à la main; gros cerneaux blancs, tendres et très nourrissants"
    },
    fa: {
      title: "چهارمغز کاغذی سفید تازه",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "پوست کاغذی نازک با شکستن آسان با دست، مغز سفید و پرچرب"
    },
    ar: {
      title: "جوز بلدي ورقي أبيض طازج",
      unit: "الوزن الصافي: ١ كغ",
      desc: "قشرة ورقية ناعمة جداً تكسر باليد، لب أبيض كبير الحجم وغني بالزيوت الصحية"
    }
  },

  p5: {
    en: {
      title: "Royal Shade-Dried Black Raisins (Sayegi)",
      unit: "1kg Net Weight",
      desc: "Cured naturally in cool dark rooms; juicy plump berries packed with iron, 100% sulfur-free"
    },
    de: {
      title: "Königliche Schattengereifte Rosinen (Sayegi)",
      unit: "1kg Netto",
      desc: "Traditionell im kühlen Schatten getrocknet; saftig, fleischig, eisenreich und ohne Schwefel"
    },
    fr: {
      title: "Raisins Noirs Royaux Séchés à l'Ombre (Sayegi)",
      unit: "1 kg Net",
      desc: "Séchage traditionnel à l'ombre sans soleil direct; charnus, juteux, riches en fer et sans conservateurs"
    },
    fa: {
      title: "کشمش سیاه سایگی شاهانه",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "تهیه شده در سایه، دانه درشت گوشتی، خون‌ساز و بدون تیزاب"
    },
    ar: {
      title: "كشمش الظل الأسود الملكي (سايكي)",
      unit: "الوزن الصافي: ١ كغ",
      desc: "مجفف في الظل بالطرق التقليدية؛ حبات لحمية غنية بالحديد والسكريات الطبيعية بدون كبريت"
    }
  },

  p6: {
    en: {
      title: "Sun-Dried Sweet Figs (Kandahar)",
      unit: "1kg Net Weight",
      desc: "Golden honey figs sun-ripened under the Afghan sun; delightfully tender, sweet and fiber-rich"
    },
    de: {
      title: "Kandahar Sonnengetrocknete Honigfeigen",
      unit: "1kg Netto",
      desc: "Goldene Honigfeigen unter der afghanischen Sonne gereift; zart, süß und reich an Ballaststoffen"
    },
    fr: {
      title: "Figues Mielleuses Séchées au Soleil (Kandahar)",
      unit: "1 kg Net",
      desc: "Figues dorées mielleuses séchées au soleil; moelleuses, naturellement sucrées et riches en fibres"
    },
    fa: {
      title: "انجیر شکری ممتاز قندهار",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "انجیر عسلی طلایی قندهار با بافت نرم و مقوی، کاملاً ارگانیک"
    },
    ar: {
      title: "تين قندهار العسلي السكري الفاخر",
      unit: "الوزن الصافي: ١ كغ",
      desc: "تين عسلي ذهبي مجفف تحت شمس قندهار؛ قوام طري حلو المذاق وغني بالألياف الصحية"
    }
  },

  p7: {
    en: {
      title: "Pure Super Negin Saffron (Herat)",
      unit: "5g in Luxury Crystal Box",
      desc: "Export-grade all-red stigmas with captivating aroma and extraordinary natural coloring power"
    },
    de: {
      title: "Reiner Super-Negin-Safran (Herat)",
      unit: "5g in Luxus-Kristalldose",
      desc: "Höchste Export-Güteklasse mit betörendem Duft und außergewöhnlicher Färbekraft"
    },
    fr: {
      title: "Safran Pur Super Negin (Hérat)",
      unit: "5g en Écrin Cristal de Luxe",
      desc: "Stigmates rouges purs de première catégorie d'exportation; arôme envoûtant et coloration éclatante"
    },
    fa: {
      title: "زعفران خالص سوپر نگین هرات",
      unit: "بسته ۵ گرم در کریستال",
      desc: "سرگل ممتاز صادراتی با عطر دل‌انگیز و قدرت رنگ‌دهی استثنایی"
    },
    ar: {
      title: "زعفران سوبر نقين الخالص (هرات)",
      unit: "عبوة ٥ غرام في كريستال فاخر",
      desc: "خيوط نقية حمراء منتقاة لأرقى معايير التصدير؛ عطر نفاذ وقوة تلوين طبيعية استثنائية"
    }
  },

  p8: {
    en: {
      title: "Sun-Dried Sweet Apricots (Qaisi)",
      unit: "1kg Net Weight",
      desc: "Tangy-sweet golden apricots sun-cured naturally on mountain terraces; 100% sulfur-free"
    },
    de: {
      title: "Sonnengereifte Süße Aprikosen (Qaisi)",
      unit: "1kg Netto",
      desc: "Fruchtig-süße goldene Aprikosen, schonend an der Bergluft getrocknet; 100% ungeschwefelt"
    },
    fr: {
      title: "Abricots Secs Sucrés au Soleil (Qaisi)",
      unit: "1 kg Net",
      desc: "Abricots dorés mûris au soleil sur les terrasses de montagne; acidulés, doux et sans soufre"
    },
    fa: {
      title: "قیسی و زردآلو آفتابی شیرین",
      unit: "واحد: ۱ کیلوگرم خالص",
      desc: "برگه زردآلو و قیسی آفتابی ملس، کاملاً طبیعی و بدون گوگرد"
    },
    ar: {
      title: "مشمش وقيسي مجفف مشمس طبيعي",
      unit: "الوزن الصافي: ١ كغ",
      desc: "شرائح مشمش ذهبية مجففة طبيعياً؛ مذاق حلو حامض متوازن وخالي تماماً من المواد الكيميائية"
    }
  }
};

// Digits converter helper
function formatLocalizedNumber(num, lang) {
  const str = String(num);
  if (lang === 'fa') {
    const pDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/[0-9]/g, d => pDigits[d]);
  }
  if (lang === 'ar') {
    const aDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return str.replace(/[0-9]/g, d => aDigits[d]);
  }
  return str;
}

// Localized price formatter
function formatLocalizedPrice(amount, lang) {
  const val = Number(amount);
  if (lang === 'de') {
    return val.toFixed(2).replace('.', ',') + ' €';
  }
  if (lang === 'fa') {
    return formatLocalizedNumber(val.toFixed(2), 'fa') + ' یورو';
  }
  if (lang === 'ar') {
    return formatLocalizedNumber(val.toFixed(2), 'ar') + ' يورو';
  }
  return val.toFixed(2) + ' €';
}

// Localized count status formatter
function getLocalizedCountStatus(count, lang) {
  const loc = formatLocalizedNumber(count, lang);
  if (lang === 'fa') return `تعداد ${loc} قلم کالا و پکیج موجود`;
  if (lang === 'ar') return `تتوفر ${loc} من السلع والباقات الفاخرة`;
  if (lang === 'de') return `${loc} Artikel und königliche Pakete verfügbar`;
  if (lang === 'fr') return `${loc} articles et coffrets royaux disponibles`;
  return `${loc} items and royal packages available`;
}

// Default 12 Products Dataset
const DEFAULT_PRODUCTS = [
  { id: 'pkg1', category: 'packages', price: 38.00, image: 'assets/rb_royal_box.jpg', inStock: true },
  { id: 'pkg2', category: 'packages', price: 32.00, image: 'assets/dried_fruits.jpg', inStock: true },
  { id: 'pkg3', category: 'packages', price: 29.00, image: 'assets/almonds.jpg', inStock: true },
  { id: 'pkg4', category: 'packages', price: 45.00, image: 'assets/pinenuts.jpg', inStock: true },
  { id: 'p1', category: 'nuts', price: 24.00, image: 'assets/almonds.jpg', inStock: true },
  { id: 'p2', category: 'pinenuts', price: 27.00, image: 'assets/almonds.jpg', inStock: true },
  { id: 'p3', category: 'pinenuts', price: 49.00, image: 'assets/pinenuts.jpg', inStock: true },
  { id: 'p4', category: 'nuts', price: 19.50, image: 'assets/almonds.jpg', inStock: true },
  { id: 'p5', category: 'fruits', price: 14.50, image: 'assets/raisins.jpg', inStock: true },
  { id: 'p6', category: 'fruits', price: 22.00, image: 'assets/dried_fruits.jpg', inStock: true },
  { id: 'p7', category: 'saffron', price: 35.00, image: 'assets/rb_royal_box.jpg', inStock: true },
  { id: 'p8', category: 'fruits', price: 18.00, image: 'assets/dried_fruits.jpg', inStock: true }
];
