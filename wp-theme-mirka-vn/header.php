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
  <div class="container">
    <span>Nhà phân phối chính hãng Mirka tại Việt Nam</span>
  </div>
</div>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <a href="<?php echo mirka_url( 'index.html' ); ?>" class="logo">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/mirka-logo.svg' ); ?>" alt="Mirka" class="logo-img">
    </a>
    <nav class="main-nav">
      <a href="<?php echo mirka_url( 'san-pham.html' ); ?>"<?php echo $is_san_pham ? ' class="active-link"' : ''; ?>>Sản phẩm</a>
      <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>"<?php echo $is_bai_viet ? ' class="active-link"' : ''; ?>>Kiến thức</a>
      <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Ngành nghề</a>
      <a href="<?php echo mirka_url( 'index.html#about' ); ?>">Về chúng tôi</a>
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
