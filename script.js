/* =============================================================
   D Property Find — script.js
   =============================================================
   1. Mobile menu toggle
   2. Sticky nav border on scroll
   3. Scroll-triggered fade-up (IntersectionObserver)
   4. Contact form validation
   ============================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Mobile Menu ── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('mobile-menu-close');
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function openMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', openMenu);
    menuClose && menuClose.addEventListener('click', closeMenu);
    menuLinks.forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
    });
  }

  /* ── 2. Sticky nav scroll border ── */
  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 3. Scroll-triggered fade-up ── */
  if (!prefersReducedMotion) {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
      );
      reveals.forEach(el => observer.observe(el));
    }
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ── 4. Contact form validation ── */
  const form = document.getElementById('contact-form');
  if (form) {
    const submitBtn = form.querySelector('[type="submit"]');

    function getField(name) {
      return form.querySelector(`[name="${name}"]`);
    }

    function showError(field, errorId, message) {
      field.classList.add('has-error');
      const err = document.getElementById(errorId);
      if (err) {
        err.textContent = message;
        err.classList.add('visible');
      }
    }

    function clearError(field, errorId) {
      field.classList.remove('has-error');
      const err = document.getElementById(errorId);
      if (err) err.classList.remove('visible');
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validate() {
      let valid = true;

      const name = getField('name');
      if (!name.value.trim()) {
        showError(name, 'err-name', 'Please enter your name.');
        valid = false;
      } else {
        clearError(name, 'err-name');
      }

      const email = getField('email');
      if (!email.value.trim() || !validateEmail(email.value)) {
        showError(email, 'err-email', 'Please enter a valid email address.');
        valid = false;
      } else {
        clearError(email, 'err-email');
      }

      const phone = getField('phone');
      if (!phone.value.trim()) {
        showError(phone, 'err-phone', 'Please enter your phone or WhatsApp number.');
        valid = false;
      } else {
        clearError(phone, 'err-phone');
      }

      const location = getField('location');
      if (!location.value) {
        showError(location, 'err-location', 'Please select where you are based.');
        valid = false;
      } else {
        clearError(location, 'err-location');
      }

      const checkboxes = form.querySelectorAll('[name="property_type"]');
      const anyChecked = Array.from(checkboxes).some(cb => cb.checked);
      const checkboxErr = document.getElementById('err-property-type');
      if (!anyChecked) {
        if (checkboxErr) {
          checkboxErr.textContent = 'Please select at least one option.';
          checkboxErr.classList.add('visible');
        }
        valid = false;
      } else {
        if (checkboxErr) checkboxErr.classList.remove('visible');
      }

      return valid;
    }

    form.addEventListener('submit', e => {
      if (!validate()) {
        e.preventDefault();
        const firstError = form.querySelector('.has-error');
        if (firstError) firstError.focus();
        return;
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
    });

    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(field => {
      field.addEventListener('blur', () => {
        const name = field.getAttribute('name');
        if (name === 'name') {
          field.value.trim() ? clearError(field, 'err-name') : showError(field, 'err-name', 'Please enter your name.');
        }
        if (name === 'email') {
          validateEmail(field.value) ? clearError(field, 'err-email') : showError(field, 'err-email', 'Please enter a valid email address.');
        }
        if (name === 'phone') {
          field.value.trim() ? clearError(field, 'err-phone') : showError(field, 'err-phone', 'Please enter your phone or WhatsApp number.');
        }
        if (name === 'location') {
          field.value ? clearError(field, 'err-location') : showError(field, 'err-location', 'Please select where you are based.');
        }
      });
    });
  }
})();
