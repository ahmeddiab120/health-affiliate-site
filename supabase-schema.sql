-- supabase-schema.sql
-- صحتك أولاً - Health Affiliate Site Database Schema
-- Run this in Supabase SQL Editor

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT,
  price NUMERIC(10,2),
  commission_rate NUMERIC(5,2),
  amazon_url TEXT,
  image_emoji TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Clicks tracking
CREATE TABLE clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_slug TEXT REFERENCES products(slug),
  clicked_at TIMESTAMPTZ DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);

-- Purchases/Conversions tracking
CREATE TABLE conversions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  click_id UUID REFERENCES clicks(id),
  product_slug TEXT REFERENCES products(slug),
  commission_amount NUMERIC(10,2),
  converted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (optional - disable if public read only)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversions ENABLE ROW LEVEL SECURITY;

-- Policies: public read, service write
CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Service role write clicks" ON clicks FOR INSERT WITH CHECK (true);
CREATE POLICY "Service role write conversions" ON conversions FOR INSERT WITH CHECK (true);

-- Insert sample products
INSERT INTO products (name, slug, category, price, commission_rate, amazon_url, image_emoji, rating, review_count, description) VALUES
  ('New Chapter Every Man''s One Daily Multivitamin', 'multivitamin', 'vitamins', 37.97, 4.5, 'https://www.amazon.com/dp/B003DH1S26', '💊', 4.5, 6300, 'فيتامين متعدد مخمّر للرجال - يدعم المناعة والطاقة'),
  ('New Chapter Wholemega Wild Alaskan Salmon Oil', 'omega3', 'oils', 49.47, 4.5, 'https://www.amazon.com/dp/B004UJ84QO', '🐟', 4.6, 4900, 'زيت سمك أوميغا 3 مع فيتامين D3 و Astaxanthin'),
  ('Gaia Herbs Ashwagandha Root 350mg', 'ashwagandha', 'herbs', 42.29, 5.0, 'https://www.amazon.com/dp/B06XSTTX7C', '🌿', 4.4, 6900, 'مكمل عشبي تكيفي للتوتر والنوم'),
  ('Gaia Herbs Turmeric Supreme Extra Strength', 'turmeric', 'herbs', 29.69, 5.0, 'https://www.amazon.com/dp/B0036THLWM', '🍛', 4.3, 3800, 'مستخلص الكركم المركّز مضاد التهاب'),
  ('New Chapter Bone Strength Take Care', 'calcium', 'minerals', 55.97, 4.5, 'https://www.amazon.com/dp/B00KTI9Q3U', '🦴', 4.5, 8800, 'كالسيوم نباتي من طحالب حمراء مع فيتامين K2');