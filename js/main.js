/* ═══════════════════════════════════════════
   صحتك أولاً - Premium JavaScript
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // LOADING SCREEN
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 500);
    }, 500);
  });
  // Fallback if load event already fired
  if (document.readyState === 'complete') {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 500);
    }, 500);
  }

  // SCROLL TO TOP
  const scrollTop = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  });

  // HEADER SCROLL EFFECT
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // FADE-IN ANIMATIONS ON SCROLL
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeElements.forEach(el => observer.observe(el));

  // MOBILE MENU
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');

  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('active'));
  }
  nav?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('active'))
  );

  // TRACK CLICKS FOR COMMISSIONS
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