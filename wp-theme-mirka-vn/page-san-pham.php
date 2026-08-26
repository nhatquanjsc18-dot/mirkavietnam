<?php
/**
 * Template Name: Trang: Sản phẩm
 * Gán template này cho một Trang (Page) có slug "san-pham".
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<!-- CATALOG -->
<section class="products" id="catalog">
  <div class="container">
    <div class="breadcrumb">Trang chủ <span>›</span> Sản phẩm</div>
    <h1 class="page-title">Tất cả sản phẩm</h1>
    <p class="page-desc">Toàn bộ danh mục máy chà nhám, vật liệu mài, đánh bóng và phụ kiện chính hãng Mirka. Dữ liệu &amp; hình ảnh gốc từ mirka.com.</p>

    <div class="cat-tabs" id="catTabs">
      <button class="cat-tab active" data-cat="all">Tất cả</button>
      <button class="cat-tab" data-cat="dien">Máy chà nhám điện</button>
      <button class="cat-tab" data-cat="khinen">Máy chà nhám khí nén</button>
      <button class="cat-tab" data-cat="robot">Robot &amp; Tự động hóa</button>
      <button class="cat-tab" data-cat="pin">Máy chà nhám dùng pin</button>
      <button class="cat-tab" data-cat="mai">Vật liệu mài</button>
      <button class="cat-tab" data-cat="danhbong">Đánh bóng</button>
      <button class="cat-tab" data-cat="hutbui">Máy hút bụi</button>
      <button class="cat-tab" data-cat="phukien">Phụ kiện &amp; Hút bụi</button>
    </div>

    <div class="search-box">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" id="productSearch" placeholder="Tìm sản phẩm...">
    </div>

    <div class="results-bar">
      <span id="resultCount">24 kết quả</span>
      <button class="filters-btn" id="filtersToggle">
        Bộ lọc nhóm
        <svg viewBox="0 0 24 24"><polygon points="4,4 20,4 14,12 14,19 10,21 10,12"></polygon></svg>
      </button>
    </div>

    <div class="filter-panel" id="filterPanel"></div>

    <div class="product-grid" id="productGrid"></div>
    <p class="no-results" id="noResults" hidden>Không tìm thấy sản phẩm phù hợp. Hãy thử từ khóa khác.</p>
  </div>
</section>

<?php get_footer(); ?>
