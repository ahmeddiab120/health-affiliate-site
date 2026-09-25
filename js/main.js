/* ═══════════════════════════════════════════
   صحتك أولاً - Mobile Menu Toggle
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('active'));
  }

  // Close menu on link click
  nav?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('active'))
  );

  // Track clicks for commissions
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    link.addEventListener('click', () => {
      const product = link.dataset.affiliate;
      fetchClick(product);
    });
  });
});

async function fetchClick(product) {
  const SUPABASE_URL = 'YOUR_SUPABASE_URL';
  const SUPABASE_KEY = 'YOUR_SUPABASE_ANON_KEY';

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/clicks`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify({ product, clicked_at: new Date().toISOString() })
    });
    console.log('Click tracked:', product, res.status);
  } catch (e) {
    console.warn('Supabase tracking failed:', e.message);
  }
}