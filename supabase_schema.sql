-- ============================================================
-- SQL Schema for R.B Shop on Supabase
-- Run this in Supabase Dashboard -> SQL Editor -> Click 'Run'
-- ============================================================

-- 1. Table for Products
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    category TEXT NOT NULL DEFAULT 'nuts',
    unit TEXT,
    variant TEXT,
    description TEXT,
    image TEXT,
    in_stock BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow Public Read
CREATE POLICY "Allow public read access to products" 
ON public.products FOR SELECT USING (true);

-- Allow Public Insert/Update/Delete (for simple store admin via anon key)
CREATE POLICY "Allow public update to products" 
ON public.products FOR UPDATE USING (true);

CREATE POLICY "Allow public insert to products" 
ON public.products FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public delete to products" 
ON public.products FOR DELETE USING (true);


-- 2. Table for Store Settings
CREATE TABLE IF NOT EXISTS public.store_settings (
    id INT PRIMARY KEY DEFAULT 1,
    owner TEXT DEFAULT 'رمضان بختیاری (R. Bakhtyary)',
    phone TEXT DEFAULT '0049 172 9343833',
    clean_phone TEXT DEFAULT '491729343833',
    address TEXT DEFAULT 'Möllers weg 6, 25761 Büsum',
    email TEXT DEFAULT 'ramazan.bakhtyari152@gmail.com',
    tiktok TEXT DEFAULT '@r.b.omar.osmanshop',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read to store_settings" 
ON public.store_settings FOR SELECT USING (true);

CREATE POLICY "Allow public update to store_settings" 
ON public.store_settings FOR ALL USING (true);


-- 3. Table for Orders
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT,
    customer_address TEXT,
    items JSONB,
    total_price NUMERIC(10, 2),
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to orders" 
ON public.orders FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read to orders" 
ON public.orders FOR SELECT USING (true);


-- 4. Insert Initial 10 Products
INSERT INTO public.products (id, title, price, category, unit, variant, description, image, in_stock)
VALUES
('pkg1', 'مخلوط شاهانه میوه خشک و مغزیجات', 45.00, 'packages', 'بسته ۱.۲ کیلوگرم • پکیج شاهانه', 'بسته مخلوط ۱.۲ کیلو', '۸ قلم اعلا: پسته، بادام قندک، چهارمغز، کشمش، قیسی و انجیر', 'assets/rb_royal_box.jpg', true),
('pkg2', 'پکیج عیدانه و مهمانی آر بی', 38.00, 'packages', 'بسته ۱ کیلوگرم • پذیرایی لوکس', 'سینی پذیرایی ۱ کیلوگرم', 'پسته خندان، بادام بوداده، کشمش سایگی و چهارمغز کاغذی تازه', 'assets/mixed_nuts.jpg', true),
('p1', 'بادام قندک کاغذی کابل', 22.00, 'nuts', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'پوست نازک کاغذی با شکستن آسان با دست، مغز شیرین و پرچرب', 'assets/almonds.jpg', true),
('p2', 'پسته خندان ممتاز هرات', 26.00, 'pinenuts', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'پسته درشت و خندان هرات با بافت برشته و طعم ناب طبیعی', 'assets/pistachio.jpg', true),
('p3', 'جلغوزه سیاه پکتیا و خوست', 34.00, 'pinenuts', 'واحد فروش: ۵۰۰ گرم خالص', '۵۰۰ گرم خالص', 'جلغوزه سیاه ارگانیک اعلا، دانه‌های درشت کشیده و روغنی', 'assets/pinenuts.jpg', true),
('p4', 'چهارمغز کاغذی سفید تازه', 18.00, 'nuts', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'پوست کاغذی نازک با شکستن آسان با دست، مغز سفید و پرچرب', 'assets/walnuts.jpg', true),
('p5', 'کشمش سیاه سایگی شاهانه', 13.00, 'fruits', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'خشک شده در سایه بدون تیزاب، سرشار از آهن و ویتامین', 'assets/raisins.jpg', true),
('p6', 'انجیر طلایی اعلای قندهار', 17.00, 'fruits', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'دانه‌های نرم، گوشتی و شیرین طبیعی بدون شکر افزوده', 'assets/figs.jpg', true),
('p7', 'زعفران سوپر نگین هرات (صادراتی)', 28.00, 'saffron', 'بسته ۵ گرم • درجه یک صادراتی', '۵ گرام در کریستال کادویی', 'سرگل ممتاز صادراتی با عطر دل‌انگیز و قدرت رنگ‌دهی استثنایی', 'assets/saffron.jpg', true),
('p8', 'قیسی و زردآلو آفتابی شیرین', 14.00, 'fruits', 'واحد فروش: ۱ کیلوگرم خالص', '۱ کیلوگرم', 'برگه زردآلو و قیسی آفتابی ملس، کاملاً طبیعی و بدون گوگرد', 'assets/apricot.jpg', true)
ON CONFLICT (id) DO NOTHING;

-- Initial Store Settings Row
INSERT INTO public.store_settings (id, owner, phone, clean_phone, address, email, tiktok)
VALUES (1, 'رمضان بختیاری (R. Bakhtyary)', '0049 172 9343833', '491729343833', 'Möllers weg 6, 25761 Büsum', 'ramazan.bakhtyari152@gmail.com', '@r.b.omar.osmanshop')
ON CONFLICT (id) DO NOTHING;
