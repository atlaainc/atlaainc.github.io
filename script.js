/* ── Scroll reveal ────────────────────────────────────────────────── */
(function () {
  'use strict';

  // Intersection Observer for reveal animations
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stagger siblings
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          siblings.forEach(function (el, i) {
            el.style.transitionDelay = i * 80 + 'ms';
          });
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ── Nav scroll behaviour ─────────────────────────────────────────
  const navHeader = document.getElementById('nav-header');
  window.addEventListener('scroll', function () {
    navHeader.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  // ── Mobile nav toggle ────────────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', function (e) {
    if (
      navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ── Contact form – use mailto as fallback ────────────────────────
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Let the default mailto: action handle it, but build a nicer subject
      const name    = (document.getElementById('name').value    || '').trim();
      const company = (document.getElementById('company').value || '').trim();
      const service = (document.getElementById('service').value || '').trim();

      let subject = 'Inquiry from ' + (name || 'a visitor');
      if (company) subject += ' (' + company + ')';
      if (service) subject += ' — ' + service;

      form.action = 'mailto:atlaainc@gmail.com?subject=' + encodeURIComponent(subject);
    });
  }
})();
