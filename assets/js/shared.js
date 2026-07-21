// ============================================================
// Header scroll shadow
// ============================================================
(function() {
  const header = document.getElementById('header');
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
})();

// ============================================================
// Mobile menu
// ============================================================
(function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('mobileMenuClose');

  function openMenu() {
    mobileMenu.classList.add('mobile-menu--open');
    mobileOverlay.classList.add('mobile-overlay--active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--open');
    mobileOverlay.classList.remove('mobile-overlay--active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Escape key closes menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMenu();
    }
  });
})();

// ============================================================
// Scroll animations (Intersection Observer)
// ============================================================
(function() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in-up').forEach(function(el) {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in-up').forEach(function(el) {
    observer.observe(el);
  });
})();
