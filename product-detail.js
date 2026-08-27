document.addEventListener('DOMContentLoaded', function () {
  // URL sạch: /mirka-{slug} (SEO: hãng Mirka + model máy). Vẫn nhận ?slug= để tương thích ngược.
  function getSlugFromUrl() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('slug')) return params.get('slug');
    var m = window.location.pathname.match(/\/mirka-([a-z0-9-]+)\/?$/i);
    return m ? m[1] : null;
  }
  function productUrl(p) {
    return (window.MIRKA_PRODUCT_BASE || 'mirka-') + p.slug;
  }

  var slug = getSlugFromUrl();
  var product = PRODUCTS.find(function (p) { return p.slug === slug; });
  if (!product) {
    // Slug không khớp sản phẩm nào (link cũ/gõ sai) -> về trang danh mục
    // thay vì âm thầm hiển thị nhầm sản phẩm đầu tiên.
    window.location.replace(window.MIRKA_CATALOG_URL || 'san-pham.html');
    return;
  }

  // Từ khóa SEO theo nguyên tắc "hãng Mirka + model máy" + danh mục, dùng seoKeyword riêng nếu đã khác tên sản phẩm.
  var seoKeyword = (product.seoKeyword && product.seoKeyword !== product.name)
    ? product.seoKeyword
    : product.name + ' - ' + (product.subCatLabel || product.categoryLabel) + ' chính hãng Mirka Việt Nam';

  document.getElementById('pageTitle').textContent = product.name + ' | Mirka Việt Nam';
  document.getElementById('pdMetaKeywords').setAttribute('content', seoKeyword);
  document.getElementById('pdMetaDesc').setAttribute('content', product.shortDesc);
  document.getElementById('breadcrumb').innerHTML =
    '<a href="index.html">Trang chủ</a> <span>›</span> ' +
    '<a href="san-pham.html?cat=' + product.category + '">' + product.categoryLabel + '</a> <span>›</span> ' +
    product.name;

  document.getElementById('pdImage').src = product.img;
  document.getElementById('pdImage').alt = product.name;
  document.getElementById('pdCat').textContent = product.subCatLabel || product.categoryLabel;
  document.getElementById('pdName').textContent = product.name;
  document.getElementById('pdShortDesc').textContent = product.shortDesc;
  document.getElementById('pdLead').textContent = product.lead;
  document.getElementById('pdWhyTitle').textContent = 'Tại sao chọn ' + product.name + '?';
  document.getElementById('pdWhy').textContent = product.why;

  var featuresEl = document.getElementById('pdFeatures');
  featuresEl.innerHTML = '';
  product.features.forEach(function (f) {
    var li = document.createElement('li');
    li.innerHTML = '<span class="pd-feat-icon">' + f[0] + '</span><span>' + f[1] + '</span>';
    featuresEl.appendChild(li);
  });

  var specsEl = document.getElementById('pdSpecs');
  specsEl.innerHTML = '';
  Object.keys(product.specs).forEach(function (key) {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>' + key + '</td><td>' + product.specs[key] + '</td>';
    specsEl.appendChild(tr);
  });

  var appsEl = document.getElementById('pdApplications');
  appsEl.innerHTML = '';
  product.applications.forEach(function (a) {
    var li = document.createElement('li');
    li.textContent = a;
    appsEl.appendChild(li);
  });

  // Related products: same category first, fill with same subCat priority
  var related = PRODUCTS.filter(function (p) { return p.slug !== product.slug && p.category === product.category; });
  if (related.length < 4) {
    var others = PRODUCTS.filter(function (p) { return p.slug !== product.slug && p.category !== product.category; });
    related = related.concat(others);
  }
  related = related.slice(0, 4);

  var relatedGrid = document.getElementById('relatedGrid');
  relatedGrid.innerHTML = '';
  related.forEach(function (p) {
    var card = document.createElement('a');
    card.className = 'product-card';
    card.href = productUrl(p);
    card.innerHTML =
      '<div class="product-img"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
      '<div class="product-body"><h3>' + p.name + '</h3><p class="desc">' + p.shortDesc + '</p></div>';
    relatedGrid.appendChild(card);
  });

  // Tabs
  document.querySelectorAll('.pd-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.pd-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('tab-mota').hidden = tab.dataset.tab !== 'mota';
      document.getElementById('tab-danhgia').hidden = tab.dataset.tab !== 'danhgia';
    });
  });
});
