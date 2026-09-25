/* ═══════════════════════════════════════════
   صحتك أولاً - JavaScript
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // Hide loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => { if (loader) loader.style.display = 'none'; }, 500);
      }
    }, 800);
  }

  // Scroll to top button
  const scrollTop = document.getElementById('scrollTop');
  if (scrollTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    });
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Header scroll effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // SCROLL ANIMATIONS - Pure CSS
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => observer.observe(el));

  // Track affiliate clicks
  document.querySelectorAll('[data-affiliate]').forEach(link => {
    link.addEventListener('click', () => {
      const product = link.dataset.affiliate;
      console.log('Affiliate click:', product);
    });
  });
});
