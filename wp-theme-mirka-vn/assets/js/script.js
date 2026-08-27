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

  // Gửi dữ liệu form (Liên hệ / Đăng ký bảo hành / Đăng ký nhận tin) về email
  // Nhất Quán. WordPress dùng admin-ajax.php (window.MIRKA_AJAX_URL do
  // functions.php khai báo), site tĩnh/Node dùng /api/contact.
  function mirkaSubmitForm(formType, params, onDone) {
    var endpoint = window.MIRKA_AJAX_URL || '/api/contact';
    if (window.MIRKA_AJAX_URL) params.append('action', 'mirka_send_form');
    params.append('formType', formType);
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) { onDone(!!(data && data.ok)); })
      .catch(function () { onDone(false); });
  }

  // Newsletter form
  var newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector('input');
      var email = input ? input.value : '';
      var params = new URLSearchParams();
      params.append('email', email);
      mirkaSubmitForm('newsletter', params, function (ok) {
        if (input) {
          input.value = '';
          input.placeholder = ok ? 'Cảm ơn bạn đã đăng ký!' : 'Có lỗi xảy ra, vui lòng thử lại.';
        }
      });
    });
  }

  // Contact / Đăng ký bảo hành form
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formType = contactForm.getAttribute('data-form-type') || 'lien-he';
      var submitBtn = contactForm.querySelector('.contact-submit');
      var originalLabel = submitBtn ? submitBtn.textContent : '';
      var error = document.getElementById('contactError');
      if (error) error.hidden = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang gửi...';
      }
      var params = new URLSearchParams(new FormData(contactForm));
      mirkaSubmitForm(formType, params, function (ok) {
        var wrap = document.getElementById('contactFormWrap');
        var success = document.getElementById('contactSuccess');
        if (ok) {
          if (wrap) wrap.hidden = true;
          if (success) success.hidden = false;
        } else {
          if (error) error.hidden = false;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        }
      });
    });
  }

  // Floating contact widget: chỉ bung Zalo/Bản đồ/Messenger khi bấm nút toggle
  var fcToggle = document.getElementById('fcToggle');
  var fcExpandable = document.getElementById('fcExpandable');
  if (fcToggle && fcExpandable) {
    fcToggle.addEventListener('click', function () {
      var isOpen = fcExpandable.classList.toggle('open');
      fcToggle.classList.toggle('open', isOpen);
      fcToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!fcExpandable.classList.contains('open')) return;
      if (fcToggle.contains(e.target) || fcExpandable.contains(e.target)) return;
      fcExpandable.classList.remove('open');
      fcToggle.classList.remove('open');
      fcToggle.setAttribute('aria-expanded', 'false');
    });
  }

});
