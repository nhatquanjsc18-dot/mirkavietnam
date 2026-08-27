<?php
/**
 * Header dùng chung cho mọi trang.
 * Tự nhận diện trang hiện tại (is_front_page / is_page_template) để bôi đậm
 * link active và hiển thị đúng khối accordion trong menu overlay.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

$is_san_pham = is_page_template( 'page-san-pham.php' );
$is_bai_viet = is_page_template( 'page-bai-viet.php' );
$is_product  = is_page_template( 'page-product.php' );
$is_nganh    = is_page_template( 'page-nganh-nghe.php' );
$is_lien_he  = is_page_template( 'page-lien-he.php' );

// Meta description & keywords tĩnh cho từng loại trang (dùng trước khi JS chạy,
// tốt cho SEO/crawler). Trang "product" tự set động qua id="pdMetaDesc"/"pdMetaKeywords".
$mirka_meta_desc = '';
$mirka_meta_kw   = '';

if ( is_front_page() ) {
	$mirka_meta_desc = 'Nhất Quán - đại lý phân phối chính hãng Mirka tại Việt Nam. Máy chà nhám điện, khí nén, dùng pin, vật liệu mài, đánh bóng và phụ kiện Mirka chính hãng, giá tốt, giao hàng toàn quốc.';
	$mirka_meta_kw   = 'Mirka Việt Nam, máy chà nhám Mirka, đại lý Mirka chính hãng, vật liệu mài Mirka, máy đánh bóng Mirka';
} elseif ( $is_san_pham ) {
	$mirka_meta_desc = 'Toàn bộ danh mục máy chà nhám điện, khí nén, dùng pin, robot tự động hóa, vật liệu mài, đánh bóng, máy hút bụi và phụ kiện chính hãng Mirka tại Việt Nam.';
	$mirka_meta_kw   = 'sản phẩm Mirka, máy chà nhám Mirka, vật liệu mài Mirka, mua Mirka chính hãng Việt Nam';
} elseif ( $is_bai_viet ) {
	$mirka_meta_desc = 'Kiến thức chà nhám không bụi, giải pháp Mirka theo từng ngành nghề (ô tô, gỗ, xây dựng, hàng hải, composite...) và tin tức mới nhất từ Mirka.';
	$mirka_meta_kw   = 'kiến thức Mirka, giải pháp chà nhám theo ngành, tin tức Mirka Việt Nam';
} elseif ( $is_lien_he ) {
	$mirka_meta_desc = 'Liên hệ Nhất Quán — nhà phân phối chính hãng Mirka tại Việt Nam. Hotline tư vấn kỹ thuật, báo giá máy chà nhám, vật liệu mài và đánh bóng Mirka.';
	$mirka_meta_kw   = 'liên hệ Mirka Việt Nam, đại lý Mirka, báo giá máy chà nhám Mirka';
} elseif ( $is_nganh ) {
	$mirka_nganh_meta = array(
		'nganh-va-cham-oto'    => array( 'Giải pháp chà nhám không bụi Mirka cho xưởng sửa chữa va chạm ô tô: Iridium Soft, Galaxy, xe đẩy Solution Trolley II và máy chà nhám điện.', 'Mirka sửa chữa va chạm ô tô, chà nhám không bụi ô tô, Mirka collision repair' ),
		'nganh-go-noi-that'    => array( 'Giải pháp Mirka cho xưởng gỗ và sản xuất nội thất: Mirka Galaxy, Ultimax Ligno, máy chà nhám điện công thái học và robot AIROS 353S.', 'Mirka ngành gỗ, chà nhám gỗ nội thất, Mirka wood industry' ),
		'nganh-xay-dung'       => array( 'Giải pháp Mirka cho thợ hoàn thiện nội thất và cải tạo công trình: máy chà tường LEROS, DEROS, DEOS Delta và vật liệu mài dạng lưới.', 'Mirka xây dựng hoàn thiện, máy chà tường LEROS, Mirka construction' ),
		'nganh-hang-hai'       => array( 'Giải pháp Mirka cho ngành đóng tàu & hàng hải: LEROS-S, File Board, hợp chất đánh bóng Polarshine Marine gốc nước.', 'Mirka hàng hải, Mirka đóng tàu, Polarshine Marine' ),
		'nganh-cong-nghiep-oto' => array( 'Giải pháp Mirka cho ngành công nghiệp ô tô OEM: Iridium Soft, vật liệu mài lưới không bụi, đầu chà nhám AIROS tích hợp robot, hợp chất PRO Iridium 1250.', 'Mirka công nghiệp ô tô, Mirka OEM automotive, AIROS robot' ),
		'nganh-composite'      => array( 'Giải pháp Mirka cho gia công composite (sợi thủy tinh, sợi carbon): Abranet, Iridium, Galaxy, Abralon, Mirlon Total, Polarshine 12 Black.', 'Mirka composite, Abranet composite, Mirka carbon fiber' ),
		'nganh-dung-cu'        => array( 'Giải pháp Mirka cho sản xuất dụng cụ hợp kim cứng: đá mài siêu mài mòn Cafro Ultra-Flute và Cafro E-Cup 11.', 'Mirka Cafro, đá mài dụng cụ hợp kim cứng, Mirka tool manufacturing' ),
		'nganh-powertrain'     => array( 'Giải pháp Mirka cho ngành truyền động (Powertrain): màng mài MI231B, đá mài siêu mài mòn Cafro CBN, Mini Worm Grinding Wheels.', 'Mirka powertrain, đá mài Cafro CBN, Mirka truyền động ô tô' ),
	);
	$mirka_nganh_slug = get_post_field( 'post_name' );
	if ( isset( $mirka_nganh_meta[ $mirka_nganh_slug ] ) ) {
		$mirka_meta_desc = $mirka_nganh_meta[ $mirka_nganh_slug ][0];
		$mirka_meta_kw   = $mirka_nganh_meta[ $mirka_nganh_slug ][1];
	}
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if ( $is_product ) : ?>
<title id="pageTitle">Sản phẩm | Mirka Việt Nam</title>
<meta id="pdMetaKeywords" name="keywords" content="">
<meta id="pdMetaDesc" name="description" content="">
<?php else : ?>
<title><?php wp_title( '|', true, 'right' ); ?><?php bloginfo( 'name' ); ?></title>
<?php if ( $mirka_meta_desc ) : ?>
<meta name="description" content="<?php echo esc_attr( $mirka_meta_desc ); ?>">
<meta name="keywords" content="<?php echo esc_attr( $mirka_meta_kw ); ?>">
<?php endif; ?>
<?php endif; ?>
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- TOP BAR -->
<div class="top-bar">
  <div class="container top-bar-inner">
    <span class="top-bar-brand">Nhà phân phối chính hãng Mirka tại Việt Nam</span>
    <div class="top-bar-contact">
      <a href="mailto:nhatquanjsc18@gmail.com"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg> nhatquanjsc18@gmail.com</a>
      <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg> T2 - T6 08:00 - 17:00 · T7 08:00 - 16:00</span>
      <a href="tel:0907811767"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1z"></path></svg> 0907 811 767</a>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <a href="<?php echo mirka_url( 'index.html' ); ?>" class="logo">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/mirka-logo.svg' ); ?>" alt="Mirka" class="logo-img">
    </a>
    <nav class="main-nav">
      <a href="<?php echo mirka_url( 'index.html#about' ); ?>">Giới thiệu</a>
      <div class="nav-item">
        <a href="<?php echo mirka_url( 'san-pham.html' ); ?>"<?php echo $is_san_pham ? ' class="active-link"' : ''; ?>>Sản phẩm <svg class="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <div class="mega-menu">
          <div class="mega-menu-grid">
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=dien' ); ?>">Máy chà nhám điện</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=dien&sub=ly-tam' ); ?>">Máy chà nhám quỹ đạo</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=dien&sub=tuong' ); ?>">Máy chà tường</a>
            </div>
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=khinen' ); ?>">Máy chà nhám khí nén</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=khinen&sub=khi-nen-ros' ); ?>">Dòng ROS</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=khinen&sub=khi-nen-pros' ); ?>">Dòng PROS</a>
            </div>
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=pin' ); ?>">Máy chà nhám dùng pin</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=pin&sub=chanham-pin' ); ?>">Máy chà nhám quỹ đạo pin</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=pin&sub=may-mai-pin' ); ?>">Máy mài &amp; chà băng pin</a>
            </div>
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=robot' ); ?>">Robot &amp; Tự động hóa</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=robot&sub=dau-robot' ); ?>">Đầu chà nhám robot</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=robot&sub=kit-ur' ); ?>">Bộ lắp đặt UR/ABB</a>
            </div>
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=mai' ); ?>">Vật liệu mài</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=mai&sub=luoi-nham' ); ?>">Giấy nhám lưới Abranet</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=mai&sub=da-nang' ); ?>">Vật liệu mài đa năng</a>
            </div>
            <div class="mega-col">
              <h4><a href="<?php echo mirka_url( 'san-pham.html?cat=danhbong' ); ?>">Đánh bóng</a></h4>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=danhbong&sub=may-danh-bong' ); ?>">Máy đánh bóng điện</a>
              <a href="<?php echo mirka_url( 'san-pham.html?cat=danhbong&sub=polarshine' ); ?>">Hoá chất đánh bóng</a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-item">
        <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Ngành nghề <svg class="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg></a>
        <div class="dropdown-menu">
          <a href="<?php echo mirka_url( 'nganh-va-cham-oto.html' ); ?>">Sửa chữa va chạm ô tô</a>
          <a href="<?php echo mirka_url( 'nganh-go-noi-that.html' ); ?>">Gỗ &amp; Nội thất</a>
          <a href="<?php echo mirka_url( 'nganh-xay-dung.html' ); ?>">Xây dựng, Cải tạo &amp; Hoàn thiện</a>
          <a href="<?php echo mirka_url( 'nganh-hang-hai.html' ); ?>">Đóng tàu &amp; Hàng hải</a>
          <a href="<?php echo mirka_url( 'nganh-cong-nghiep-oto.html' ); ?>">Ngành công nghiệp ô tô</a>
          <a href="<?php echo mirka_url( 'nganh-composite.html' ); ?>">Vật liệu Composite</a>
          <a href="<?php echo mirka_url( 'nganh-dung-cu.html' ); ?>">Sản xuất dụng cụ</a>
          <a href="<?php echo mirka_url( 'nganh-powertrain.html' ); ?>">Truyền động (Powertrain)</a>
        </div>
      </div>
      <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>"<?php echo $is_bai_viet ? ' class="active-link"' : ''; ?>>Kiến thức</a>
      <a href="<?php echo mirka_url( 'lien-he.html' ); ?>"<?php echo $is_lien_he ? ' class="active-link"' : ''; ?>>Liên hệ</a>
    </nav>
    <div class="header-actions">
      <button class="icon-btn" id="searchToggle" aria-label="Tìm kiếm">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </button>
      <button class="icon-btn" id="menuToggle" aria-label="Menu">
        <svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </div>
  <div class="search-bar" id="searchBar">
    <div class="container">
      <input type="text" id="headerSearch" placeholder="Tìm sản phẩm, ví dụ: DEROS, LEROS, chà nhám...">
    </div>
  </div>
</header>

<!-- MOBILE / OVERLAY MENU -->
<div class="menu-overlay" id="menuOverlay">
  <div class="menu-panel">
    <div class="menu-panel-head">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/mirka-logo.svg' ); ?>" alt="Mirka" class="logo-img menu-logo">
      <button class="icon-btn" id="menuClose" aria-label="Đóng">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="accordion">
      <button class="accordion-item" data-target="acc1">
        <span>Sản phẩm</span><span class="plus">+</span>
      </button>
      <div class="accordion-body" id="acc1">
        <a href="<?php echo mirka_url( 'san-pham.html?cat=dien' ); ?>">Máy chà nhám điện</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=khinen' ); ?>">Máy chà nhám khí nén</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=robot' ); ?>">Robot &amp; Tự động hóa</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=pin' ); ?>">Máy chà nhám dùng pin</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=mai' ); ?>">Vật liệu mài</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=danhbong' ); ?>">Đánh bóng</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=hutbui' ); ?>">Máy hút bụi</a>
        <a href="<?php echo mirka_url( 'san-pham.html?cat=phukien' ); ?>">Phụ kiện &amp; Hút bụi</a>
      </div>
      <button class="accordion-item" data-target="acc2">
        <span>Kiến thức</span><span class="plus">+</span>
      </button>
      <div class="accordion-body" id="acc2">
        <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>">Tin tức &amp; bài viết</a>
      </div>
      <?php if ( is_front_page() ) : ?>
      <button class="accordion-item" data-target="acc3">
        <span>Ngành nghề</span><span class="plus">+</span>
      </button>
      <div class="accordion-body" id="acc3">
        <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Sửa chữa ô tô</a>
        <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Gỗ nội thất</a>
        <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Xây dựng - Hoàn thiện</a>
      </div>
      <button class="accordion-item" data-target="acc4">
        <span>Công ty</span><span class="plus">+</span>
      </button>
      <div class="accordion-body" id="acc4">
        <a href="<?php echo mirka_url( 'index.html#about' ); ?>">Giới thiệu</a>
        <a href="<?php echo mirka_url( 'lien-he.html' ); ?>">Liên hệ</a>
      </div>
      <?php endif; ?>
    </div>
    <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="menu-foot-link">📍 Tìm đại lý</a>
    <?php if ( is_front_page() ) : ?>
    <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="menu-foot-link">🌐 Ngôn ngữ: Tiếng Việt</a>
    <?php endif; ?>
  </div>
</div>
