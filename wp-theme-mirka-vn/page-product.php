<?php
/**
 * Template Name: Trang: Chi tiết sản phẩm
 * Gán template này cho một Trang (Page) có slug "product".
 * Nội dung chi tiết được product-detail.js render động dựa vào ?slug=... trên URL.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<!-- BREADCRUMB -->
<div class="pd-breadcrumb-wrap">
  <div class="container">
    <div class="breadcrumb" id="breadcrumb">Trang chủ <span>›</span> Sản phẩm</div>
  </div>
</div>

<!-- PRODUCT MAIN -->
<section class="pd-main">
  <div class="container pd-grid">
    <div class="pd-gallery">
      <img id="pdImage" src="" alt="">
    </div>
    <div class="pd-info">
      <span class="pd-cat" id="pdCat"></span>
      <h1 id="pdName"></h1>
      <p class="pd-shortdesc" id="pdShortDesc"></p>
      <div class="pd-cta-row">
        <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="btn btn-primary">Yêu cầu báo giá</a>
        <a href="tel:0907811767" class="btn btn-outline-dark">📞 0907 811 767</a>
      </div>
      <ul class="pd-trust">
        <li>✅ Đại lý chính hãng Mirka tại Việt Nam</li>
        <li>✅ Bảo hành 1 năm + hỗ trợ kỹ thuật</li>
        <li>✅ Giao hàng nhanh toàn quốc</li>
      </ul>
    </div>
  </div>
</section>

<!-- TABS -->
<section class="pd-tabs-section">
  <div class="container">
    <div class="pd-tabs">
      <button class="pd-tab active" data-tab="mota">MÔ TẢ</button>
      <button class="pd-tab" data-tab="danhgia">ĐÁNH GIÁ (0)</button>
    </div>

    <div class="pd-tab-panel" id="tab-mota">
      <p class="pd-lead" id="pdLead"></p>

      <h3>Đặc điểm nổi bật</h3>
      <ul class="pd-features" id="pdFeatures"></ul>

      <h3>Thông số kỹ thuật</h3>
      <table class="pd-specs" id="pdSpecs"></table>

      <h3>Ứng dụng phù hợp nhất</h3>
      <ul class="pd-applications" id="pdApplications"></ul>

      <h3 id="pdWhyTitle">Tại sao chọn sản phẩm này?</h3>
      <p class="pd-why" id="pdWhy"></p>

      <h3>Tại sao chọn Công ty CP Công nghiệp Nhất Quán?</h3>
      <ul class="pd-why-company">
        <li>🛡️ Đại lý chính hãng Mirka tại Việt Nam</li>
        <li>🔧 Bảo hành 1 năm + hỗ trợ kỹ thuật</li>
        <li>🧰 Cung cấp phụ kiện chính hãng (đế máy, giấy nhám)</li>
        <li>🚚 Giao hàng nhanh toàn quốc</li>
        <li>💬 Tư vấn miễn phí lựa chọn máy phù hợp ngành bạn</li>
      </ul>

      <div class="pd-contact-band">
        <p>Liên hệ ngay: <strong>0907 811 767</strong> hoặc</p>
        <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="btn btn-primary">Yêu cầu báo giá</a>
      </div>
    </div>

    <div class="pd-tab-panel" id="tab-danhgia" hidden>
      <p class="pd-no-review">Chưa có đánh giá nào cho sản phẩm này. Hãy là người đầu tiên chia sẻ trải nghiệm của bạn.</p>
    </div>
  </div>
</section>

<!-- RELATED -->
<section class="pd-related">
  <div class="container">
    <h2 class="section-title-center">Sản phẩm tương tự</h2>
    <div class="product-grid" id="relatedGrid"></div>
  </div>
</section>

<?php get_footer(); ?>
