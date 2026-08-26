<?php
/**
 * Trang chủ (tự động dùng cho địa chỉ gốc của site, không cần gán template).
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<!-- HERO -->
<section class="hero">
  <img class="hero-bg" src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/hero-abranet-sanding.jpg' ); ?>" alt="Chà nhám gỗ bằng máy chà nhám ly tâm Mirka và đĩa nhám Abranet">
  <div class="hero-scrim"></div>
  <div class="container hero-content">
    <span class="eyebrow">Sản xuất tại Phần Lan từ năm 1943</span>
    <h1>DEXOS® 1217 M AFC</h1>
    <p>Máy hút bụi công nghiệp compact dung tích 17 lít, chuẩn M-class, tự động làm sạch bộ lọc (AFC) — bạn đồng hành lý tưởng cho các máy chà nhám điện Mirka.</p>
    <a href="<?php echo mirka_url( 'product.html?slug=dexos-1217' ); ?>" class="btn btn-primary">Khám phá DEXOS 1217</a>
  </div>
</section>

<!-- FEATURE BLOCK 1 -->
<section class="feature-block">
  <div class="container feature-grid">
    <div class="feature-img">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/aerospace-header.jpg' ); ?>" alt="Bảo dưỡng và hoàn thiện bề mặt máy bay với giải pháp Mirka">
    </div>
    <div class="feature-text">
      <span class="eyebrow-dark">Giải pháp cho ngành hàng không</span>
      <h2>Hoàn thiện bề mặt máy bay đẳng cấp</h2>
      <p>Từ chà nhám vỏ ngoài, xử lý oxy hóa đến đánh bóng linh kiện — vật liệu mài và hợp chất đánh bóng Mirka đáp ứng tiêu chuẩn khắt khe của ngành bảo dưỡng hàng không (base maintenance).</p>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=mai' ); ?>" class="link-arrow">Khám phá vật liệu mài →</a>
    </div>
  </div>
</section>

<!-- FEATURE BLOCK 2 (reversed) -->
<section class="feature-block feature-alt">
  <div class="container feature-grid reverse">
    <div class="feature-text">
      <span class="eyebrow-dark">Mirka Iridium™ Soft</span>
      <h2>Chà nhám khô hiệu quả</h2>
      <p>Iridium™ Soft là vật liệu mài bọt mềm cho chà nhám khô không bụi, được phát triển riêng cho các hãng ô tô OEM và xưởng sửa chữa va chạm.</p>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=mai' ); ?>" class="link-arrow">Tìm hiểu về vật liệu mài →</a>
    </div>
    <div class="feature-img">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/feature-iridium-soft.jpg' ); ?>" alt="Đĩa nhám Iridium Soft với xe thể thao">
    </div>
  </div>
</section>

<!-- STAT / WARRANTY BAND -->
<section class="stat-band">
  <div class="container stat-inner">
    <div class="stat-number">2+1<span>năm</span></div>
    <div class="stat-text">
      <h3>Đăng ký bảo hành dễ dàng</h3>
      <p>Tất cả dụng cụ điện Mirka được bảo hành tiêu chuẩn 2 năm. Đăng ký sản phẩm trong vòng 30 ngày kể từ ngày mua để nhận thêm 1 năm bảo hành miễn phí.</p>
    </div>
    <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="btn btn-outline-light">Đăng ký bảo hành</a>
  </div>
</section>

<!-- PRODUCTS: featured -->
<section class="products" id="products">
  <div class="container">
    <div class="section-head-row">
      <div>
        <h2 class="page-title">Sản phẩm nổi bật</h2>
        <p class="page-desc">Một số sản phẩm tiêu biểu trong hơn 95 sản phẩm thuộc 5 nhóm: Máy chà nhám điện, Máy chà nhám khí nén, Vật liệu mài, Đánh bóng, Phụ kiện &amp; Hút bụi. Dữ liệu &amp; hình ảnh gốc từ mirka.com.</p>
      </div>
      <a href="<?php echo mirka_url( 'san-pham.html' ); ?>" class="link-arrow">Xem tất cả sản phẩm →</a>
    </div>

    <div class="product-grid" id="featuredGrid"></div>
  </div>
</section>

<!-- INDUSTRIES -->
<section class="industries" id="industries">
  <div class="container">
    <h2 class="section-title-center">Giải pháp theo ngành nghề</h2>
    <div class="industry-grid">
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-va-cham-oto.html' ); ?>">Sửa chữa va chạm ô tô</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-go-noi-that.html' ); ?>">Gỗ &amp; Nội thất</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-xay-dung.html' ); ?>">Xây dựng, Cải tạo &amp; Hoàn thiện nội thất</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-hang-hai.html' ); ?>">Đóng tàu &amp; Hàng hải</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-cong-nghiep-oto.html' ); ?>">Ngành công nghiệp ô tô</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-composite.html' ); ?>">Vật liệu Composite</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-dung-cu.html' ); ?>">Sản xuất dụng cụ</a>
      <a class="industry-card" href="<?php echo mirka_url( 'nganh-powertrain.html' ); ?>">Truyền động (Powertrain)</a>
    </div>
  </div>
</section>

<!-- KNOW-HOW / NEWS -->
<section class="knowhow" id="knowhow">
  <div class="container">
    <div class="section-head-row">
      <h2>Kiến thức &amp; Tin tức</h2>
      <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>" class="link-arrow">Xem thêm bài viết →</a>
    </div>
    <div class="news-grid">
      <a class="news-card" href="<?php echo mirka_url( 'bai-viet.html' ); ?>">
        <span class="news-tag">Giải thưởng</span>
        <h4>POLAROS® RP 600 đạt giải thiết kế Red Dot Award</h4>
      </a>
      <a class="news-card" href="<?php echo mirka_url( 'bai-viet.html' ); ?>">
        <span class="news-tag">Bền vững</span>
        <h4>Mirka nhận Huy chương Đồng EcoVadis 2026</h4>
      </a>
      <a class="news-card" href="<?php echo mirka_url( 'bai-viet.html' ); ?>">
        <span class="news-tag">Sản phẩm mới</span>
        <h4>Ra mắt dòng đá mài Bonded Wheels mới cho mài nhỏ gọn</h4>
      </a>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section class="about" id="about">
  <div class="container about-inner">
    <span class="eyebrow-dark">Tận tâm với sự hoàn thiện</span>
    <h2>Đồng hành cùng bạn từ năm 1943</h2>
    <p>Mirka là công ty gia đình Phần Lan và là công ty duy nhất phát triển, sản xuất vật liệu mài, dụng cụ và hợp chất đánh bóng dưới cùng một mái nhà. Gần tám thập kỷ qua, Mirka luôn đi đầu trong công nghệ hoàn thiện bề mặt.</p>
    <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="link-arrow">Tìm hiểu thêm về chúng tôi →</a>
  </div>
</section>

<!-- NEWSLETTER -->
<section class="newsletter">
  <div class="container newsletter-inner">
    <div>
      <h2>Luôn cập nhật thông tin &amp; cảm hứng</h2>
      <p>Nhận giải pháp hoàn thiện bề mặt, mẹo sử dụng và xu hướng ngành — dành cho người dùng chuyên nghiệp như bạn.</p>
    </div>
    <form class="newsletter-form" id="newsletterForm">
      <input type="email" placeholder="Nhập email của bạn" required>
      <button type="submit" class="btn btn-primary">Đăng ký</button>
    </form>
  </div>
</section>

<?php get_footer(); ?>
