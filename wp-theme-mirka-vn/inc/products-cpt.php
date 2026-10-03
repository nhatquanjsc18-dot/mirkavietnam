<?php
/**
 * Sản phẩm Mirka lưu trong database WordPress (Custom Post Type "mirka_product").
 *
 * - Quản lý/sửa sản phẩm trong wp-admin → menu "Sản phẩm Mirka".
 * - Mỗi trường dữ liệu lưu thành 1 post meta (tiền tố "mp_"), cùng định dạng
 *   với file import WXR (wordpress-import/mirka-products.xml) và file nạp mẫu
 *   assets/data/products.json.
 * - Front-end (catalog.js, product-detail.js, industries.js...) vẫn đọc mảng
 *   JS toàn cục PRODUCTS như cũ: theme dựng mảng này từ database và ghi ra
 *   file wp-content/uploads/mirka/products.js (trình duyệt cache được). File tự
 *   dựng lại mỗi khi có sản phẩm được thêm/sửa/xoá.
 * - Nếu database chưa có sản phẩm nào, theme tự dùng lại bộ products-data*.js
 *   đóng gói sẵn, nên web không bao giờ trống trước khi import.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/** Nhãn hiển thị của từng danh mục (khớp với categoryLabel trong dữ liệu gốc). */
function mirka_product_categories() {
	return array(
		'dien'     => 'Máy chà nhám điện',
		'khinen'   => 'Máy chà nhám khí nén',
		'pin'      => 'Máy chà nhám dùng pin',
		'robot'    => 'Robot & Tự động hóa',
		'mai'      => 'Vật liệu mài',
		'danhbong' => 'Đánh bóng',
		'hutbui'   => 'Máy hút bụi',
		'phukien'  => 'Phụ kiện & Hút bụi',
	);
}

/**
 * Các trường của sản phẩm: key => [nhãn, kiểu, ghi chú].
 * Kiểu: text | textarea | select | lines (mỗi dòng 1 mục).
 */
function mirka_product_fields() {
	return array(
		'slug'         => array( 'Slug (đường dẫn)', 'text', 'Chữ thường, không dấu, nối bằng gạch ngang. URL sản phẩm sẽ là /mirka-{slug}/, vd: deros-ii-650.' ),
		'category'     => array( 'Danh mục', 'select', '' ),
		'subCat'       => array( 'Mã nhóm con (subCat)', 'text', 'Mã dùng để lọc, vd: ly-tam, tuong, khi-nen-ros. Nên dùng đúng mã của sản phẩm cùng nhóm.' ),
		'subCatLabel'  => array( 'Tên nhóm con', 'text', 'Hiển thị cho khách, vd: Máy chà nhám quỹ đạo.' ),
		'img'          => array( 'Ảnh sản phẩm', 'text', 'Đường dẫn ảnh trong theme (vd: images/products/0220-MID6504044a.jpg) hoặc URL đầy đủ (vd: ảnh tải lên Thư viện media).' ),
		'shortDesc'    => array( 'Mô tả ngắn', 'textarea', 'Hiển thị trên thẻ sản phẩm.' ),
		'lead'         => array( 'Giới thiệu đầu trang chi tiết', 'textarea', '' ),
		'why'          => array( 'Vì sao nên chọn', 'textarea', '' ),
		'seoKeyword'   => array( 'Từ khoá SEO', 'text', '' ),
		'features'     => array( 'Tính năng nổi bật', 'lines', 'Mỗi dòng 1 tính năng, dạng: biểu tượng | nội dung. Vd: ⚙️ | Động cơ Brushless bền bỉ' ),
		'specs'        => array( 'Thông số kỹ thuật', 'lines', 'Mỗi dòng 1 thông số, dạng: tên | giá trị. Vd: Công suất | 400 W' ),
		'applications' => array( 'Ứng dụng', 'lines', 'Mỗi dòng 1 ứng dụng.' ),
	);
}

/* ------------------------------------------------------------------ */
/* Đăng ký Custom Post Type                                            */
/* ------------------------------------------------------------------ */

function mirka_register_product_cpt() {
	register_post_type(
		'mirka_product',
		array(
			'labels'              => array(
				'name'               => 'Sản phẩm Mirka',
				'singular_name'      => 'Sản phẩm',
				'menu_name'          => 'Sản phẩm Mirka',
				'add_new'            => 'Thêm sản phẩm',
				'add_new_item'       => 'Thêm sản phẩm mới',
				'edit_item'          => 'Sửa sản phẩm',
				'new_item'           => 'Sản phẩm mới',
				'all_items'          => 'Tất cả sản phẩm',
				'search_items'       => 'Tìm sản phẩm',
				'not_found'          => 'Chưa có sản phẩm nào.',
				'not_found_in_trash' => 'Không có sản phẩm trong thùng rác.',
			),
			// Mỗi sản phẩm có URL /mirka/{slug}/ (để nút "Xem" trong wp-admin hoạt động) và URL này
			// tự chuyển hướng 301 về trang chi tiết chính /mirka-{slug}/ (xem mirka_redirect_product_url).
			// public=false giữ sản phẩm ra khỏi sitemap WordPress và kết quả tìm kiếm của site.
			'public'              => false,
			'publicly_queryable'  => true,
			'exclude_from_search' => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_rest'        => false,
			'menu_position'       => 21,
			'menu_icon'           => 'dashicons-products',
			'supports'            => array( 'title' ),
			'has_archive'         => false,
			'rewrite'             => array( 'slug' => 'mirka', 'with_front' => false ),
			'capability_type'     => 'post',
		)
	);
}
add_action( 'init', 'mirka_register_product_cpt' );

/** /mirka/{slug}/ (nút "Xem" trong wp-admin) -> 301 về trang chi tiết chính /mirka-{slug}/. */
function mirka_redirect_product_url() {
	if ( ! is_singular( 'mirka_product' ) ) {
		return;
	}
	$id   = get_queried_object_id();
	$slug = (string) get_post_meta( $id, 'mp_slug', true );
	if ( $slug === '' ) {
		$slug = (string) get_post_field( 'post_name', $id );
	}
	wp_safe_redirect( mirka_product_url( $slug ), 301 );
	exit;
}
add_action( 'template_redirect', 'mirka_redirect_product_url' );

/* ------------------------------------------------------------------ */
/* Chuyển đổi giữa mảng sản phẩm (JS) <-> post meta                    */
/* ------------------------------------------------------------------ */

/** Mảng sản phẩm -> mảng meta dạng chuỗi (key đã có tiền tố mp_). */
function mirka_product_array_to_meta( $p ) {
	$meta = array();
	foreach ( array( 'slug', 'category', 'subCat', 'subCatLabel', 'img', 'shortDesc', 'lead', 'why', 'seoKeyword' ) as $k ) {
		$meta[ 'mp_' . $k ] = isset( $p[ $k ] ) ? (string) $p[ $k ] : '';
	}

	$lines = array();
	if ( ! empty( $p['features'] ) && is_array( $p['features'] ) ) {
		foreach ( $p['features'] as $f ) {
			$lines[] = ( isset( $f[0] ) ? $f[0] : '' ) . ' | ' . ( isset( $f[1] ) ? $f[1] : '' );
		}
	}
	$meta['mp_features'] = implode( "\n", $lines );

	$lines = array();
	if ( ! empty( $p['specs'] ) && is_array( $p['specs'] ) ) {
		foreach ( $p['specs'] as $k => $v ) {
			$lines[] = $k . ' | ' . $v;
		}
	}
	$meta['mp_specs'] = implode( "\n", $lines );

	$meta['mp_applications'] = ( ! empty( $p['applications'] ) && is_array( $p['applications'] ) ) ? implode( "\n", $p['applications'] ) : '';

	return $meta;
}

/** Tách văn bản nhiều dòng thành mảng các dòng không rỗng. */
function mirka_split_lines( $text ) {
	$out = array();
	foreach ( preg_split( '/\r\n|\r|\n/', (string) $text ) as $line ) {
		$line = trim( $line );
		if ( $line !== '' ) {
			$out[] = $line;
		}
	}
	return $out;
}

/** Đọc post meta của 1 sản phẩm -> mảng đúng định dạng PRODUCTS mà JS đang dùng. */
function mirka_product_meta_to_array( $post_id ) {
	$get = function ( $key ) use ( $post_id ) {
		return (string) get_post_meta( $post_id, 'mp_' . $key, true );
	};

	$cats     = mirka_product_categories();
	$category = $get( 'category' );
	$slug     = $get( 'slug' );
	if ( $slug === '' ) {
		$slug = (string) get_post_field( 'post_name', $post_id );
	}

	$img = $get( 'img' );
	if ( $img !== '' && ! preg_match( '#^(https?:)?//#i', $img ) && $img[0] !== '/' ) {
		$img = get_template_directory_uri() . '/assets/' . ltrim( $img, '/' );
	}

	$features = array();
	foreach ( mirka_split_lines( $get( 'features' ) ) as $line ) {
		$parts      = explode( ' | ', $line, 2 );
		$features[] = count( $parts ) === 2 ? array( trim( $parts[0] ), trim( $parts[1] ) ) : array( '•', $line );
	}

	$specs = array();
	foreach ( mirka_split_lines( $get( 'specs' ) ) as $line ) {
		$parts = explode( ' | ', $line, 2 );
		if ( count( $parts ) === 2 ) {
			$specs[ trim( $parts[0] ) ] = trim( $parts[1] );
		}
	}

	// Dùng tiêu đề thô: get_the_title() chạy wptexturize nên đổi " thành &#8243; và "10 x 330" thành "10 × 330".
	$name = (string) get_post_field( 'post_title', $post_id, 'raw' );

	return array(
		'slug'          => $slug,
		'name'          => $name,
		'seoKeyword'    => $get( 'seoKeyword' ) !== '' ? $get( 'seoKeyword' ) : $name,
		'category'      => $category,
		'categoryLabel' => isset( $cats[ $category ] ) ? $cats[ $category ] : $category,
		'subCat'        => $get( 'subCat' ),
		'subCatLabel'   => $get( 'subCatLabel' ),
		'img'           => $img,
		'shortDesc'     => $get( 'shortDesc' ),
		'lead'          => $get( 'lead' ),
		'features'      => $features,
		// (object) để mảng rỗng vẫn thành {} trong JSON, JS đọc Object.entries không lỗi.
		'specs'         => (object) $specs,
		'applications'  => mirka_split_lines( $get( 'applications' ) ),
		'why'           => $get( 'why' ),
	);
}

/* ------------------------------------------------------------------ */
/* File products.js (cache) dựng từ database                           */
/* ------------------------------------------------------------------ */

function mirka_products_file() {
	$u = wp_upload_dir();
	return array(
		'path' => trailingslashit( $u['basedir'] ) . 'mirka/products.js',
		'url'  => trailingslashit( $u['baseurl'] ) . 'mirka/products.js',
	);
}

/** Dựng chuỗi JS "window.PRODUCTS = [...]" từ database; trả '' nếu chưa có sản phẩm. */
function mirka_products_js_string() {
	$posts = get_posts(
		array(
			'post_type'     => 'mirka_product',
			'post_status'   => 'publish',
			'numberposts'   => -1,
			'orderby'       => 'ID',
			'order'         => 'ASC',
			'no_found_rows' => true,
		)
	);
	if ( empty( $posts ) ) {
		return '';
	}

	$list = array();
	foreach ( $posts as $post ) {
		$list[] = mirka_product_meta_to_array( $post->ID );
	}

	$json = wp_json_encode( $list, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );
	// U+2028/2029 hợp lệ trong JSON nhưng một số trình duyệt cũ coi là xuống dòng trong chuỗi JS.
	$json = str_replace( array( "\xE2\x80\xA8", "\xE2\x80\xA9" ), array( ' ', ' ' ), $json );

	return 'window.PRODUCTS = ' . $json . ';';
}

/**
 * Nguồn dữ liệu sản phẩm cho front-end:
 *  - array( 'type' => 'file', 'url' => ... )  : file cache trong uploads (ưu tiên)
 *  - array( 'type' => 'inline', 'js' => ... ) : thư mục uploads không ghi được -> in thẳng vào trang
 *  - false                                    : chưa có sản phẩm trong database -> dùng products-data*.js
 */
function mirka_products_source() {
	$file = mirka_products_file();

	if ( ! file_exists( $file['path'] ) ) {
		$js = mirka_products_js_string();
		if ( $js === '' ) {
			return false;
		}
		wp_mkdir_p( dirname( $file['path'] ) );
		if ( @file_put_contents( $file['path'], $js ) === false ) {
			return array( 'type' => 'inline', 'js' => $js );
		}
	}

	return array(
		'type' => 'file',
		'url'  => add_query_arg( 'ver', (int) @filemtime( $file['path'] ), $file['url'] ),
	);
}

/** Xoá file cache để lần xem trang kế tiếp dựng lại từ database. */
function mirka_invalidate_products_cache( $post_id = 0 ) {
	if ( $post_id && get_post_type( $post_id ) !== 'mirka_product' ) {
		return;
	}
	$file = mirka_products_file();
	if ( file_exists( $file['path'] ) ) {
		@unlink( $file['path'] );
	}
}
add_action( 'save_post_mirka_product', 'mirka_invalidate_products_cache' );
add_action( 'trashed_post', 'mirka_invalidate_products_cache' );
add_action( 'untrashed_post', 'mirka_invalidate_products_cache' );
add_action( 'before_delete_post', 'mirka_invalidate_products_cache' );

/** Import WXR thêm meta SAU khi tạo bài, nên cũng phải xoá cache khi meta "mp_*" đổi. */
function mirka_invalidate_on_meta( $meta_id, $post_id, $meta_key ) {
	if ( strpos( (string) $meta_key, 'mp_' ) === 0 ) {
		mirka_invalidate_products_cache( $post_id );
	}
}
add_action( 'added_post_meta', 'mirka_invalidate_on_meta', 10, 3 );
add_action( 'updated_post_meta', 'mirka_invalidate_on_meta', 10, 3 );

/* ------------------------------------------------------------------ */
/* Meta box sửa sản phẩm trong wp-admin                                */
/* ------------------------------------------------------------------ */

function mirka_add_product_metabox() {
	add_meta_box( 'mirka_product_data', 'Thông tin sản phẩm', 'mirka_render_product_metabox', 'mirka_product', 'normal', 'high' );
}
add_action( 'add_meta_boxes', 'mirka_add_product_metabox' );

function mirka_render_product_metabox( $post ) {
	wp_nonce_field( 'mirka_save_product', 'mirka_product_nonce' );
	$cats = mirka_product_categories();

	echo '<p style="color:#555;">Tên sản phẩm nhập ở ô tiêu đề phía trên. Các trường còn lại nhập tại đây.</p>';
	echo '<table class="form-table" role="presentation"><tbody>';
	foreach ( mirka_product_fields() as $key => $def ) {
		list( $label, $type, $note ) = $def;
		$name  = 'mp_' . $key;
		$value = (string) get_post_meta( $post->ID, $name, true );
		if ( $key === 'slug' && $value === '' ) {
			$value = (string) $post->post_name;
		}

		echo '<tr><th scope="row"><label for="' . esc_attr( $name ) . '">' . esc_html( $label ) . '</label></th><td>';
		if ( $type === 'select' ) {
			echo '<select id="' . esc_attr( $name ) . '" name="' . esc_attr( $name ) . '">';
			foreach ( $cats as $cat_key => $cat_label ) {
				echo '<option value="' . esc_attr( $cat_key ) . '"' . selected( $value, $cat_key, false ) . '>' . esc_html( $cat_label ) . '</option>';
			}
			echo '</select>';
		} elseif ( $type === 'text' ) {
			echo '<input type="text" class="large-text" id="' . esc_attr( $name ) . '" name="' . esc_attr( $name ) . '" value="' . esc_attr( $value ) . '">';
		} else {
			$rows = ( $type === 'lines' ) ? 6 : 3;
			echo '<textarea class="large-text" rows="' . (int) $rows . '" id="' . esc_attr( $name ) . '" name="' . esc_attr( $name ) . '">' . esc_textarea( $value ) . '</textarea>';
		}
		if ( $note !== '' ) {
			echo '<p class="description">' . esc_html( $note ) . '</p>';
		}
		echo '</td></tr>';
	}
	echo '</tbody></table>';
}

function mirka_save_product_meta( $post_id ) {
	if ( ! isset( $_POST['mirka_product_nonce'] ) || ! wp_verify_nonce( $_POST['mirka_product_nonce'], 'mirka_save_product' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$cats = mirka_product_categories();
	foreach ( mirka_product_fields() as $key => $def ) {
		$type = $def[1];
		$name = 'mp_' . $key;
		if ( ! isset( $_POST[ $name ] ) ) {
			continue;
		}
		$raw = wp_unslash( $_POST[ $name ] );

		if ( $type === 'select' ) {
			$value = isset( $cats[ $raw ] ) ? $raw : 'dien';
		} elseif ( $type === 'text' ) {
			$value = sanitize_text_field( $raw );
			if ( $key === 'slug' ) {
				$value = sanitize_title( $value );
			}
		} else {
			$value = sanitize_textarea_field( $raw );
		}
		update_post_meta( $post_id, $name, $value );
	}

	// Slug trống -> lấy từ tên sản phẩm.
	if ( get_post_meta( $post_id, 'mp_slug', true ) === '' ) {
		update_post_meta( $post_id, 'mp_slug', sanitize_title( get_post_field( 'post_title', $post_id, 'raw' ) ) );
	}
}
add_action( 'save_post_mirka_product', 'mirka_save_product_meta' );

/* ------------------------------------------------------------------ */
/* Cột hiển thị trong danh sách sản phẩm                               */
/* ------------------------------------------------------------------ */

function mirka_product_columns( $columns ) {
	return array(
		'cb'           => $columns['cb'],
		'title'        => 'Tên sản phẩm',
		'mp_category'  => 'Danh mục',
		'mp_subCatLbl' => 'Nhóm con',
		'mp_slug'      => 'Slug',
	);
}
add_filter( 'manage_mirka_product_posts_columns', 'mirka_product_columns' );

function mirka_product_column_content( $column, $post_id ) {
	if ( $column === 'mp_category' ) {
		$cats = mirka_product_categories();
		$cat  = (string) get_post_meta( $post_id, 'mp_category', true );
		echo esc_html( isset( $cats[ $cat ] ) ? $cats[ $cat ] : $cat );
	} elseif ( $column === 'mp_subCatLbl' ) {
		echo esc_html( (string) get_post_meta( $post_id, 'mp_subCatLabel', true ) );
	} elseif ( $column === 'mp_slug' ) {
		echo esc_html( (string) get_post_meta( $post_id, 'mp_slug', true ) );
	}
}
add_action( 'manage_mirka_product_posts_custom_column', 'mirka_product_column_content', 10, 2 );

/* ------------------------------------------------------------------ */
/* Trang "Nạp dữ liệu mẫu": nạp 268 sản phẩm từ assets/data/products.json */
/* ------------------------------------------------------------------ */

function mirka_seed_menu() {
	add_submenu_page(
		'edit.php?post_type=mirka_product',
		'Nạp dữ liệu sản phẩm mẫu',
		'Nạp dữ liệu mẫu',
		'manage_options',
		'mirka-seed-products',
		'mirka_seed_page'
	);
}
add_action( 'admin_menu', 'mirka_seed_menu' );

function mirka_seed_json_path() {
	return get_template_directory() . '/assets/data/products.json';
}

function mirka_seed_page() {
	$count = (int) wp_count_posts( 'mirka_product' )->publish;
	$path  = mirka_seed_json_path();
	$total = 0;
	if ( file_exists( $path ) ) {
		$data  = json_decode( (string) file_get_contents( $path ), true );
		$total = is_array( $data ) ? count( $data ) : 0;
	}

	echo '<div class="wrap"><h1>Nạp dữ liệu sản phẩm mẫu</h1>';

	if ( isset( $_GET['seeded'] ) ) {
		echo '<div class="notice notice-success"><p>Đã nạp <strong>' . (int) $_GET['seeded'] . '</strong> sản phẩm mới, bỏ qua <strong>' . (int) ( isset( $_GET['skipped'] ) ? $_GET['skipped'] : 0 ) . '</strong> sản phẩm đã có sẵn (trùng slug).</p></div>';
	}

	echo '<p>Hiện có <strong>' . $count . '</strong> sản phẩm trong database. File dữ liệu mẫu của theme có <strong>' . $total . '</strong> sản phẩm.</p>';
	echo '<p>Bấm nút bên dưới để thêm các sản phẩm còn thiếu vào database (sản phẩm đã có cùng slug sẽ được giữ nguyên, không ghi đè, không tạo trùng). Có thể bấm nhiều lần an toàn.</p>';

	if ( $total === 0 ) {
		echo '<p style="color:#b32d2e;">Không đọc được file assets/data/products.json trong theme.</p>';
	} else {
		echo '<form method="post" action="' . esc_url( admin_url( 'admin-post.php' ) ) . '">';
		echo '<input type="hidden" name="action" value="mirka_seed_products">';
		wp_nonce_field( 'mirka_seed_products', 'mirka_seed_nonce' );
		submit_button( 'Nạp ' . $total . ' sản phẩm từ file dữ liệu mẫu' );
		echo '</form>';
	}
	echo '</div>';
}

function mirka_handle_seed_products() {
	if ( ! current_user_can( 'manage_options' ) || ! isset( $_POST['mirka_seed_nonce'] ) || ! wp_verify_nonce( $_POST['mirka_seed_nonce'], 'mirka_seed_products' ) ) {
		wp_die( 'Không có quyền thực hiện thao tác này.' );
	}

	if ( function_exists( 'set_time_limit' ) ) {
		@set_time_limit( 300 );
	}

	$data = json_decode( (string) file_get_contents( mirka_seed_json_path() ), true );
	if ( ! is_array( $data ) ) {
		wp_die( 'Không đọc được file assets/data/products.json.' );
	}

	// Gom các slug đã có để bỏ qua, tránh trùng khi bấm nhiều lần.
	$existing = array();
	$ids      = get_posts(
		array(
			'post_type'     => 'mirka_product',
			'post_status'   => 'any',
			'numberposts'   => -1,
			'fields'        => 'ids',
			'no_found_rows' => true,
		)
	);
	foreach ( $ids as $id ) {
		$slug = (string) get_post_meta( $id, 'mp_slug', true );
		if ( $slug !== '' ) {
			$existing[ $slug ] = true;
		}
	}

	$added   = 0;
	$skipped = 0;
	foreach ( $data as $p ) {
		if ( empty( $p['slug'] ) || empty( $p['name'] ) ) {
			continue;
		}
		if ( isset( $existing[ $p['slug'] ] ) ) {
			$skipped++;
			continue;
		}
		$meta = array();
		foreach ( mirka_product_array_to_meta( $p ) as $k => $v ) {
			$meta[ $k ] = wp_slash( $v ); // meta_input yêu cầu dữ liệu đã "slash".
		}
		$post_id = wp_insert_post(
			wp_slash(
				array(
					'post_type'   => 'mirka_product',
					'post_title'  => $p['name'],
					'post_name'   => $p['slug'],
					'post_status' => 'publish',
				)
			) + array( 'meta_input' => $meta ),
			true
		);
		if ( ! is_wp_error( $post_id ) ) {
			$existing[ $p['slug'] ] = true;
			$added++;
		}
	}

	mirka_invalidate_products_cache();
	wp_safe_redirect( admin_url( 'edit.php?post_type=mirka_product&page=mirka-seed-products&seeded=' . $added . '&skipped=' . $skipped ) );
	exit;
}
add_action( 'admin_post_mirka_seed_products', 'mirka_handle_seed_products' );

/** Nhắc nạp dữ liệu khi vào danh sách sản phẩm mà database còn trống. */
function mirka_empty_products_notice() {
	$screen = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
	if ( ! $screen || $screen->id !== 'edit-mirka_product' ) {
		return;
	}
	if ( (int) wp_count_posts( 'mirka_product' )->publish > 0 ) {
		return;
	}
	echo '<div class="notice notice-warning"><p>Chưa có sản phẩm nào trong database (web đang hiển thị bộ sản phẩm đóng gói sẵn trong theme). '
		. '<a href="' . esc_url( admin_url( 'edit.php?post_type=mirka_product&page=mirka-seed-products' ) ) . '"><strong>Nạp dữ liệu mẫu</strong></a> '
		. 'hoặc dùng <em>Công cụ → Nhập → WordPress</em> với file mirka-products.xml.</p></div>';
}
add_action( 'admin_notices', 'mirka_empty_products_notice' );
