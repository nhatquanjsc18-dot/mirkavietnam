<?php
/**
 * Mirka Việt Nam theme - functions & theme setup
 */

if ( ! defined( 'ABSPATH' ) ) exit;

define( 'MIRKA_THEME_VERSION', '1.0' );

/**
 * Chuyển link nội bộ kiểu file tĩnh (vd: "san-pham.html?cat=dien",
 * "product.html?slug=deros-rs-600", "index.html#about") thành URL WordPress
 * thật, dựa trên các trang (Page) mà người dùng tạo ra và gán template.
 *
 * Yêu cầu: đã tạo 12 trang WordPress với slug đúng là:
 *   san-pham  (gán template "Trang: Sản phẩm")
 *   product   (gán template "Trang: Chi tiết sản phẩm")
 *   bai-viet  (gán template "Trang: Kiến thức & Tin tức")
 *   lien-he   (gán template "Trang: Liên hệ")
 *   dang-ky-bao-hanh (gán template "Trang: Đăng ký bảo hành")
 *   dieu-khoan-bao-hanh (gán template "Trang: Điều khoản bảo hành")
 *   nganh-va-cham-oto, nganh-go-noi-that, nganh-xay-dung, nganh-hang-hai,
 *   nganh-cong-nghiep-oto, nganh-composite, nganh-dung-cu, nganh-powertrain
 *   (cả 8 trang này đều gán template "Trang: Ngành nghề")
 */
function mirka_url( $href ) {
	$fragment = '';
	if ( strpos( $href, '#' ) !== false ) {
		list( $href, $fragment ) = explode( '#', $href, 2 );
	}

	$query = '';
	if ( strpos( $href, '?' ) !== false ) {
		list( $href, $query ) = explode( '?', $href, 2 );
	}

	// URL sản phẩm dùng dạng SEO-friendly /mirka-{model}/ (hãng Mirka + model máy)
	// thay vì /product/?slug=... — xem mirka_product_url().
	if ( $href === 'product.html' && strpos( $query, 'slug=' ) === 0 ) {
		return mirka_product_url( substr( $query, 5 ) );
	}

	$map = array(
		'index.html'    => '',
		''               => '',
		'san-pham.html' => 'san-pham',
		'product.html'  => 'product',
		'bai-viet.html' => 'bai-viet',
		'lien-he.html'  => 'lien-he',
		'dang-ky-bao-hanh.html' => 'dang-ky-bao-hanh',
		'dieu-khoan-bao-hanh.html' => 'dieu-khoan-bao-hanh',
		'nganh-va-cham-oto.html'    => 'nganh-va-cham-oto',
		'nganh-go-noi-that.html'    => 'nganh-go-noi-that',
		'nganh-xay-dung.html'       => 'nganh-xay-dung',
		'nganh-hang-hai.html'       => 'nganh-hang-hai',
		'nganh-cong-nghiep-oto.html' => 'nganh-cong-nghiep-oto',
		'nganh-composite.html'      => 'nganh-composite',
		'nganh-dung-cu.html'        => 'nganh-dung-cu',
		'nganh-powertrain.html'     => 'nganh-powertrain',
	);

	$slug = isset( $map[ $href ] ) ? $map[ $href ] : '';
	$url  = $slug === '' ? home_url( '/' ) : home_url( '/' . $slug . '/' );

	if ( $query !== '' ) {
		$url .= '?' . $query;
	}
	if ( $fragment !== '' ) {
		$url .= '#' . $fragment;
	}

	return esc_url( $url );
}

/**
 * URL sản phẩm SEO-friendly: /mirka-{slug}/ — nguyên tắc "hãng Mirka + model máy".
 * Không cần tạo Page riêng cho từng sản phẩm: rewrite rule bên dưới điều hướng
 * mọi /mirka-*/ về Trang "product" (page-product.php), rồi product-detail.js
 * đọc model từ chính URL (window.location.pathname) để render đúng sản phẩm.
 */
function mirka_product_url( $slug ) {
	return esc_url( home_url( '/mirka-' . $slug . '/' ) );
}

/**
 * Đăng ký rewrite rule cho /mirka-{slug}/ -> Trang "product".
 * Sau khi kích hoạt theme lần đầu (hoặc đổi rule), vào Cài đặt → Đường dẫn tĩnh
 * rồi bấm Lưu một lần để WordPress flush rewrite rules.
 */
function mirka_rewrite_rules() {
	add_rewrite_rule( '^mirka-([^/]+)/?$', 'index.php?pagename=product&mirka_slug=$matches[1]', 'top' );
}
add_action( 'init', 'mirka_rewrite_rules' );

function mirka_query_vars( $vars ) {
	$vars[] = 'mirka_slug';
	return $vars;
}
add_filter( 'query_vars', 'mirka_query_vars' );

function mirka_flush_rewrite_rules() {
	mirka_rewrite_rules();
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'mirka_flush_rewrite_rules' );

/**
 * Theme setup
 */
function mirka_theme_setup() {
	// Không dùng add_theme_support('title-tag'): trang "product" tự quản lý
	// <title id="pageTitle"> và các thẻ meta SEO id="pdMetaKeywords"/"pdMetaDesc"
	// bằng JS (product-detail.js) giống hệt bản HTML tĩnh gốc, xem header.php.
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'mirka_theme_setup' );

/**
 * Styles & scripts.
 * Toàn bộ JS gốc được nạp theo đúng thứ tự phụ thuộc như bản HTML tĩnh
 * (products-data*.js -> script.js -> catalog.js / product-detail.js),
 * và chỉ nạp thêm các file cần cho từng loại trang để tránh lỗi JS
 * (catalog.js / product-detail.js truy cập phần tử DOM không tồn tại
 * trên các trang khác).
 */
function mirka_enqueue_assets() {
	wp_enqueue_style( 'mirka-style', get_stylesheet_uri(), array(), MIRKA_THEME_VERSION );

	$theme_uri = get_template_directory_uri();

	// Base cho URL sản phẩm SEO-friendly (/mirka-{slug}/), dùng bởi catalog.js
	// và product-detail.js khi tự dựng href="..." cho từng thẻ sản phẩm.
	$product_base_js = 'var MIRKA_PRODUCT_BASE = ' . wp_json_encode( home_url( '/mirka-' ) ) . ';'
		// product-detail.js chuyển hướng về đây nếu slug trên URL không khớp sản phẩm nào.
		. ' var MIRKA_CATALOG_URL = ' . wp_json_encode( mirka_url( 'san-pham.html' ) ) . ';';

	// Dữ liệu sản phẩm dùng chung cho: trang chủ, trang sản phẩm, trang chi tiết sản phẩm.
	$needs_product_data = is_front_page() || is_page_template( 'page-san-pham.php' ) || is_page_template( 'page-product.php' );

	if ( $needs_product_data ) {
		wp_enqueue_script( 'mirka-products-1', $theme_uri . '/assets/js/products-data.js', array(), MIRKA_THEME_VERSION, true );
		// Toàn bộ ảnh sản phẩm đã được tải về và đặt trong assets/images/products/
		// (không còn phụ thuộc / hotlink CDN img.mirka.com). products-data*.js ghép
		// MIRKA_IMG_BASE với tên file ảnh cục bộ, nên biến này phải tồn tại TRƯỚC
		// khi products-data.js chạy.
		wp_add_inline_script(
			'mirka-products-1',
			'var MIRKA_IMG_BASE = ' . wp_json_encode( trailingslashit( $theme_uri . '/assets/images/products' ) ) . ';',
			'before'
		);
		wp_enqueue_script( 'mirka-products-2', $theme_uri . '/assets/js/products-data-2.js', array( 'mirka-products-1' ), MIRKA_THEME_VERSION, true );
		wp_enqueue_script( 'mirka-products-3', $theme_uri . '/assets/js/products-data-3.js', array( 'mirka-products-2' ), MIRKA_THEME_VERSION, true );
		wp_enqueue_script( 'mirka-products-4', $theme_uri . '/assets/js/products-data-4.js', array( 'mirka-products-3' ), MIRKA_THEME_VERSION, true );
		wp_enqueue_script( 'mirka-products-5', $theme_uri . '/assets/js/products-data-5.js', array( 'mirka-products-4' ), MIRKA_THEME_VERSION, true );
		wp_enqueue_script( 'mirka-products-6', $theme_uri . '/assets/js/products-data-6.js', array( 'mirka-products-5' ), MIRKA_THEME_VERSION, true );
		wp_enqueue_script( 'mirka-script', $theme_uri . '/assets/js/script.js', array( 'mirka-products-6' ), MIRKA_THEME_VERSION, true );
		wp_add_inline_script( 'mirka-script', $product_base_js, 'before' );
	} else {
		// Trang không có dữ liệu sản phẩm (vd: bai-viet, page.php) vẫn cần script.js
		// cho menu/search/accordion/newsletter, nhưng không phụ thuộc products-data.
		wp_enqueue_script( 'mirka-script', $theme_uri . '/assets/js/script.js', array(), MIRKA_THEME_VERSION, true );
	}

	// script.js dùng biến này để gửi form Liên hệ/Đăng ký bảo hành/Đăng ký nhận
	// tin qua admin-ajax.php thay vì /api/contact (chỉ tồn tại ở bản Node).
	wp_add_inline_script(
		'mirka-script',
		'var MIRKA_AJAX_URL = ' . wp_json_encode( admin_url( 'admin-ajax.php' ) ) . ';',
		'before'
	);

	if ( is_page_template( 'page-san-pham.php' ) ) {
		wp_enqueue_script( 'mirka-catalog', $theme_uri . '/assets/js/catalog.js', array( 'mirka-script' ), MIRKA_THEME_VERSION, true );
	}

	if ( is_page_template( 'page-product.php' ) ) {
		wp_enqueue_script( 'mirka-product-detail', $theme_uri . '/assets/js/product-detail.js', array( 'mirka-script' ), MIRKA_THEME_VERSION, true );
	}

	if ( is_front_page() ) {
		$inline = "document.addEventListener('DOMContentLoaded', function () {\n"
			. "  var featuredSlugs = ['deros-rs-600','leros-950cv','pros-680cv','abranet-150','polaros-rp600','deros-ii-550','abralon-j3-150','dexos-1217'];\n"
			. "  var grid = document.getElementById('featuredGrid');\n"
			. "  if (!grid || typeof PRODUCTS === 'undefined') return;\n"
			. "  featuredSlugs.forEach(function (slug) {\n"
			. "    var p = PRODUCTS.find(function (x) { return x.slug === slug; });\n"
			. "    if (!p) return;\n"
			. "    var card = document.createElement('a');\n"
			. "    card.className = 'product-card';\n"
			. "    card.href = (window.MIRKA_PRODUCT_BASE || 'mirka-') + p.slug;\n"
			. "    card.innerHTML =\n"
			. "      '<div class=\"product-img\"><img src=\"' + p.img + '\" alt=\"' + p.name + '\"></div>' +\n"
			. "      '<div class=\"product-body\"><span class=\"mini-tag\">' + p.subCatLabel + '</span><h3>' + p.name + '</h3><p class=\"desc\">' + p.shortDesc + '</p></div>';\n"
			. "    grid.appendChild(card);\n"
			. "  });\n"
			. "});";
		wp_add_inline_script( 'mirka-script', $inline, 'after' );
	}
}
add_action( 'wp_enqueue_scripts', 'mirka_enqueue_assets' );

/**
 * Xử lý submit form Liên hệ / Đăng ký bảo hành / Đăng ký nhận tin (gọi qua
 * admin-ajax.php từ script.js, xem MIRKA_AJAX_URL ở mirka_enqueue_assets()).
 * Gửi email về mirka_mail_to() bằng wp_mail() — trên hosting thật cần cấu
 * hình SMTP (plugin WP Mail SMTP hoặc tương đương) để wp_mail() gửi được,
 * vì PHP mail() mặc định dễ bị nhà cung cấp mail đánh spam/chặn.
 */
function mirka_mail_to() {
	return apply_filters( 'mirka_mail_to', 'nhatquanjsc18@gmail.com' );
}

function mirka_handle_send_form() {
	// Honeypot chống spam bot: field "website" ẩn trên form, người dùng thật
	// không bao giờ điền vào -> nếu có giá trị thì âm thầm coi như thành công.
	if ( ! empty( $_POST['website'] ) ) {
		wp_send_json( array( 'ok' => true ) );
	}

	$form_type = isset( $_POST['formType'] ) ? sanitize_text_field( wp_unslash( $_POST['formType'] ) ) : 'lien-he';

	$labels = array(
		'lien-he'          => 'Liên hệ tư vấn',
		'dang-ky-bao-hanh' => 'Đăng ký bảo hành',
		'newsletter'       => 'Đăng ký nhận tin',
	);
	$field_labels = array(
		'name'         => 'Họ và tên',
		'phone'        => 'Số điện thoại',
		'email'        => 'Email',
		'company'      => 'Công ty / Đơn vị',
		'product'      => 'Sản phẩm quan tâm',
		'message'      => 'Nội dung',
		'model'        => 'Model máy / Mã sản phẩm',
		'serial'       => 'Số serial',
		'purchaseDate' => 'Ngày mua hàng',
		'store'        => 'Nơi mua hàng',
	);
	$skip = array( 'formType', 'website', 'action' );

	$rows      = array();
	$name_val  = '';
	$email_val = '';
	foreach ( $_POST as $key => $value ) {
		if ( in_array( $key, $skip, true ) ) {
			continue;
		}
		$value = sanitize_text_field( wp_unslash( $value ) );
		if ( $value === '' ) {
			continue;
		}
		if ( $key === 'name' ) {
			$name_val = $value;
		}
		if ( $key === 'email' ) {
			$email_val = $value;
		}
		$label   = isset( $field_labels[ $key ] ) ? $field_labels[ $key ] : $key;
		$rows[]  = $label . ': ' . $value;
	}

	if ( $form_type !== 'newsletter' && $name_val === '' ) {
		wp_send_json( array(
			'ok'    => false,
			'error' => 'missing_name',
		), 400 );
	}

	$label   = isset( $labels[ $form_type ] ) ? $labels[ $form_type ] : 'Form website';
	$subject = '[Mirka VN] ' . $label . ( $name_val !== '' ? ' - ' . $name_val : '' );
	$body    = implode( "\n", $rows );
	$headers = array( 'Content-Type: text/plain; charset=UTF-8' );
	if ( $email_val !== '' && is_email( $email_val ) ) {
		$headers[] = 'Reply-To: ' . $email_val;
	}

	$sent = wp_mail( mirka_mail_to(), $subject, $body, $headers );

	wp_send_json( array( 'ok' => (bool) $sent ) );
}
add_action( 'wp_ajax_mirka_send_form', 'mirka_handle_send_form' );
add_action( 'wp_ajax_nopriv_mirka_send_form', 'mirka_handle_send_form' );
