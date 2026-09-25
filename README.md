# صحتك أولاً | Sehhatak Awlan

**Site:** Health & Wellness Affiliate Marketing Website  
**Stack:** GitHub Pages (static) + Supabase (database) + Amazon Associates (affiliate links)  
**Niche:** Health supplements, vitamins, herbal products  

---

## 📁 Structure

```
health-affiliate-site/
├── index.html              # Landing page
├── css/
│   └── style.css           # Full stylesheet
├── js/
│   └── main.js             # Mobile menu + click tracking
├── products/
│   ├── multivitamin.html   # Review: New Chapter Multivitamin
│   ├── omega3.html         # Review: Wholemega Fish Oil
│   ├── ashwagandha.html    # Review: Gaia Ashwagandha
│   ├── turmeric.html       # Review: Gaia Turmeric
│   └── calcium.html        # Review: New Chapter Bone Strength
├── supabase-schema.sql     # Database setup
├── content-plan.md         # 30-day content calendar
├── social-media-posts.md   # Ready-to-post content
├── README.md               # This file
└── disclaimer.html         # Legal disclaimer (create manually)
```

---

## 🚀 Setup (15 دقائق)

### 1. GitHub Pages
1. أنشئ ريبو على GitHub باسم `health-affiliate-site`
2. ارفع كل الملفات
3. Settings → Pages → Source: `main` branch
4. الموقع هيطلع على: `https://username.github.io/health-affiliate-site`

### 2. Supabase
1. سجّل على [supabase.com](https://supabase.com)
2. أنشئ مشروع جديد
3. افتح SQL Editor → الصق `supabase-schema.sql`
4. خد `URL` و `anon key` من Settings → API
5. عدّل `js/main.js` — غيّر `YOUR_SUPABASE_URL` و `YOUR_SUPABASE_ANON_KEY`

### 3. Amazon Associates
1. سجّل في [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
2. خد الـ Tracking ID (مثلاً: `sehhatak01-20`)
3. عدّل كل روابط `YOUR_ASSOC_ID` في HTML files

### 4. Domain (اختياري)
- اشتري دومين من Namecheap ($10/سنة)
- اربطه بـ GitHub Pages (Settings → Pages → Custom domain)

---

## 💰 الربح

| المصدر | المتوقع |
|:---|:---|
| Amazon Associates | 1-10% per sale |
| Oweli (40%) | $17 per $43 sale |
| CJ Affiliate | varies |

**المتوقع بعد 3 أشهر:** $50-300/شهر (بناءً على 500-2000 زيارة/شهر)

---

## 📝 Customization

- غيّر الاسم/الوصف في `<title>` و `<meta>` لكل صفحة
- عدّل الأسعار لآخر تحديث
- أضف منتجات جديدة في `supabase-schema.sql`
- تحدّث المحتوى شهرياً per `content-plan.md`

---

## ⚠️ Legal
- FTC disclosure: كل رابط عمولة لازم يكون مُعلن
- Health disclaimer: الموقع مش بديل عن طبيب
- GDPR: لو بتشغل للـ EU تحتاج cookie consent

---

## 🤝 مساهمة
Fork + PR — أو ابعتلي اقتراحك.