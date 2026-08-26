document.addEventListener('DOMContentLoaded', function () {

  // Header search toggle
  var searchToggle = document.getElementById('searchToggle');
  var searchBar = document.getElementById('searchBar');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function () {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open')) {
        var input = document.getElementById('headerSearch');
        if (input) input.focus();
      }
    });
  }

  // Overlay menu
  var menuToggle = document.getElementById('menuToggle');
  var menuClose = document.getElementById('menuClose');
  var menuOverlay = document.getElementById('menuOverlay');
  if (menuToggle && menuOverlay) {
    menuToggle.addEventListener('click', function () {
      menuOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', function () {
      menuOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (menuOverlay) {
    menuOverlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Accordion in overlay menu
  document.querySelectorAll('.accordion-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var body = document.getElementById(btn.dataset.target);
      var isOpen = body.classList.contains('open');
      document.querySelectorAll('.accordion-body.open').forEach(function (b) { b.classList.remove('open'); });
      document.querySelectorAll('.accordion-item.open').forEach(function (b) { b.classList.remove('open'); });
      if (!isOpen) {
        body.classList.add('open');
        btn.classList.add('open');
      }
    });
  });

  // Newsletter form (demo only)
  var newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input');
      input.value = '';
      input.placeholder = 'Cảm ơn bạn đã đăng ký!';
    });
  }

  // Contact form (demo only)
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var wrap = document.getElementById('contactFormWrap');
      var success = document.getElementById('contactSuccess');
      if (wrap) wrap.hidden = true;
      if (success) success.hidden = false;
    });
  }

});
