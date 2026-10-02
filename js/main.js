/* ═══════════════════════════════════════════════
   صحتك أولاً — Site interactions
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // Loader
  const loader = document.getElementById('loader');
  if (loader) {
    const hide = () => {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 600);
    };
    if (document.readyState === 'complete') setTimeout(hide, 400);
    else window.addEventListener('load', () => setTimeout(hide, 400));
    setTimeout(hide, 2600); // safety net
  }

  // Scroll-to-top button
  const scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    const onScroll = () => {
      scrollTop.classList.toggle('visible', window.scrollY > 350);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Header background on scroll
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('active');
      hamburger.textContent = open ? '✕' : '☰';
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
      });
    });
  }

  // Reveal-on-scroll animations
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // Affiliate click logging (analytics hook)
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    link.addEventListener('click', () => {
      console.info('[affiliate click]', link.dataset.affiliate);
    });
  });

  // Dynamic footer year
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
