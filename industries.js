// Ánh xạ sản phẩm Mirka theo ngành nghề ứng dụng, dùng cho khối "Sản phẩm
// gợi ý" trên các trang nganh-*.html. Một sản phẩm có thể áp dụng cho NHIỀU
// ngành cùng lúc — được suy ra từ category/subCat/tên sản phẩm ngay khi
// trang chạy, thay vì phải sửa tay field trong từng dòng products-data*.js
// (267 sản phẩm). Cần yêu cầu products-data*.js đã nạp trước file này.

var INDUSTRY_LABELS = {
  'nganh-va-cham-oto': 'Sửa chữa va chạm ô tô',
  'nganh-go-noi-that': 'Gỗ & Nội thất',
  'nganh-xay-dung': 'Xây dựng, Cải tạo & Hoàn thiện',
  'nganh-hang-hai': 'Đóng tàu & Hàng hải',
  'nganh-cong-nghiep-oto': 'Ngành công nghiệp ô tô',
  'nganh-composite': 'Vật liệu Composite',
  'nganh-dung-cu': 'Sản xuất dụng cụ',
  'nganh-powertrain': 'Truyền động (Powertrain)',
};

function getProductIndustries(p) {
  var ind = [];
  function add() {
    for (var i = 0; i < arguments.length; i++) {
      if (ind.indexOf(arguments[i]) === -1) ind.push(arguments[i]);
    }
  }

  var name = (p.name || '').toLowerCase();
  var isMarine = name.indexOf('marine') !== -1;
  var isWallSander = p.subCat === 'tuong';
  var isGeneralSander = p.category === 'dien' || p.category === 'khinen' || p.category === 'pin';
  var isAbrasive = p.category === 'mai';
  var isPolish = p.category === 'danhbong';
  var isRobot = p.category === 'robot';
  var isVacuum = p.category === 'hutbui';
  var isAccessory = p.category === 'phukien';

  // Máy chà nhám nói chung, máy hút bụi, phụ kiện đi kèm (đế lót...):
  // dùng phổ biến ở xưởng sửa xe, xưởng gỗ, công trình xây dựng/hoàn thiện.
  if (isGeneralSander || isVacuum || isAccessory) {
    add('nganh-va-cham-oto', 'nganh-go-noi-that', 'nganh-xay-dung');
  }
  // Máy chà tường/trần (LEROS...): xây dựng hoàn thiện + vỏ tàu du thuyền.
  if (isWallSander) {
    add('nganh-xay-dung', 'nganh-hang-hai');
  }
  // Vật liệu mài (Abranet, Iridium, Galaxy, Abralon, Mirlon...): áp dụng rất
  // rộng, gồm cả composite (sợi thủy tinh/carbon); thêm hàng hải nếu tên có "marine".
  if (isAbrasive) {
    add('nganh-va-cham-oto', 'nganh-go-noi-that', 'nganh-xay-dung', 'nganh-composite');
    if (isMarine) add('nganh-hang-hai');
  }
  // Hợp chất/máy đánh bóng: dòng Polarshine Marine cho hàng hải + composite,
  // các dòng còn lại cho sửa xe (detailing) + công nghiệp ô tô (OEM).
  if (isPolish) {
    if (isMarine) {
      add('nganh-hang-hai', 'nganh-composite');
    } else {
      add('nganh-va-cham-oto', 'nganh-cong-nghiep-oto');
    }
  }
  // Robot/tự động hóa (đầu chà nhám AIROS, bộ đổi dụng cụ...): công nghiệp
  // ô tô, composite, sản xuất dụng cụ, truyền động — các ngành sản xuất quy
  // mô lớn dùng tự động hóa nhiều nhất.
  if (isRobot) {
    add('nganh-cong-nghiep-oto', 'nganh-composite', 'nganh-dung-cu', 'nganh-powertrain');
  }

  return ind;
}

function getProductsForIndustry(industrySlug) {
  if (typeof PRODUCTS === 'undefined') return [];
  return PRODUCTS.filter(function (p) {
    return getProductIndustries(p).indexOf(industrySlug) !== -1;
  });
}

// Chọn xen kẽ theo nhóm (subCat/category) thay vì lấy nguyên N sản phẩm đầu
// mảng — tránh tình trạng 1 nhóm đông (vd. máy điện DEROS/LEROS xuất hiện
// trước trong products-data.js) chiếm hết chỗ, khiến các nhóm khác (vd. máy
// khí nén ROS/PROS) không bao giờ lọt vào danh sách gợi ý dù vẫn khớp ngành.
function pickDiverse(list, limit) {
  var groups = {};
  var order = [];
  list.forEach(function (p) {
    // Nhóm theo category (dien/khinen/pin/mai/danhbong/hutbui/phukien/robot)
    // chứ không phải subCat — subCat quá nhiều loại (tuong/ly-tam/xoay/...)
    // nên nhóm theo nó vẫn để 1 category đông (vd. dien) chiếm hết vòng đầu.
    var key = p.category;
    if (!groups[key]) { groups[key] = []; order.push(key); }
    groups[key].push(p);
  });
  var picked = [];
  for (var round = 0; picked.length < limit; round++) {
    var addedThisRound = false;
    for (var i = 0; i < order.length && picked.length < limit; i++) {
      var g = groups[order[i]];
      if (g[round]) { picked.push(g[round]); addedThisRound = true; }
    }
    if (!addedThisRound) break;
  }
  return picked;
}

// Render tối đa `limit` sản phẩm gợi ý vào #<gridId>, ẩn cả khối cha
// (.industry-products) nếu ngành đó chưa có sản phẩm nào khớp.
function renderIndustryProducts(industrySlug, gridId, limit) {
  var grid = document.getElementById(gridId);
  if (!grid || typeof PRODUCTS === 'undefined') return;
  var list = getProductsForIndustry(industrySlug);
  var wrap = grid.closest('.industry-products');
  if (!list.length) {
    if (wrap) wrap.hidden = true;
    return;
  }
  pickDiverse(list, limit || 8).forEach(function (p) {
    var card = document.createElement('a');
    card.className = 'product-card';
    card.href = (window.MIRKA_PRODUCT_BASE || 'mirka-') + p.slug;
    card.innerHTML =
      '<div class="product-img"><img src="' + p.img + '" alt="' + p.name + '"></div>' +
      '<div class="product-body"><span class="mini-tag">' + p.subCatLabel + '</span><h3>' + p.name + '</h3><p class="desc">' + p.shortDesc + '</p></div>';
    grid.appendChild(card);
  });
}
