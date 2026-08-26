document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('productGrid');
  var resultCount = document.getElementById('resultCount');
  var noResults = document.getElementById('noResults');
  var searchInput = document.getElementById('productSearch');
  var filterPanel = document.getElementById('filterPanel');
  var catTabs = document.querySelectorAll('.cat-tab');
  var filtersToggle = document.getElementById('filtersToggle');

  var params = new URLSearchParams(window.location.search);
  var activeCat = params.get('cat') || 'all';
  var activeSub = 'all';

  function renderCards(list) {
    grid.innerHTML = '';
    list.forEach(function (p) {
      var card = document.createElement('a');
      card.className = 'product-card';
      card.href = (window.MIRKA_PRODUCT_BASE || 'mirka-') + p.slug;
      card.innerHTML =
        '<div class="product-img"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
        '<div class="product-body"><span class="mini-tag">' + p.subCatLabel + '</span><h3>' + p.name + '</h3><p class="desc">' + p.shortDesc + '</p></div>';
      grid.appendChild(card);
    });
    resultCount.textContent = list.length + ' kết quả';
    noResults.hidden = list.length !== 0;
  }

  function renderSubFilters() {
    var subs = [];
    PRODUCTS.forEach(function (p) {
      if (activeCat === 'all' || p.category === activeCat) {
        if (subs.indexOf(p.subCat) === -1) subs.push(p.subCat);
      }
    });
    filterPanel.innerHTML = '';
    var allChip = document.createElement('span');
    allChip.className = 'filter-chip' + (activeSub === 'all' ? ' active' : '');
    allChip.textContent = 'Tất cả nhóm';
    allChip.dataset.sub = 'all';
    filterPanel.appendChild(allChip);
    subs.forEach(function (subKey) {
      var product = PRODUCTS.find(function (p) { return p.subCat === subKey; });
      var chip = document.createElement('span');
      chip.className = 'filter-chip' + (activeSub === subKey ? ' active' : '');
      chip.textContent = product.subCatLabel;
      chip.dataset.sub = subKey;
      filterPanel.appendChild(chip);
    });
    filterPanel.querySelectorAll('.filter-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        activeSub = chip.dataset.sub;
        filterPanel.querySelectorAll('.filter-chip').forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        applyFilters();
      });
    });
  }

  function applyFilters() {
    var query = searchInput.value.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      var matchesCat = activeCat === 'all' || p.category === activeCat;
      var matchesSub = activeSub === 'all' || p.subCat === activeSub;
      var matchesSearch = query === '' || (p.name + ' ' + p.shortDesc).toLowerCase().indexOf(query) !== -1;
      return matchesCat && matchesSub && matchesSearch;
    });
    renderCards(list);
  }

  catTabs.forEach(function (tab) {
    if (tab.dataset.cat === activeCat) tab.classList.add('active');
    else tab.classList.remove('active');
    tab.addEventListener('click', function () {
      activeCat = tab.dataset.cat;
      activeSub = 'all';
      catTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      renderSubFilters();
      applyFilters();
    });
  });

  filtersToggle.addEventListener('click', function () {
    filterPanel.classList.toggle('open');
  });

  searchInput.addEventListener('input', applyFilters);

  renderSubFilters();
  applyFilters();
});
