<?php
/**
 * Template Name: Trang: Ngành nghề
 * Dùng chung cho cả 8 trang bài viết ngành nghề — nội dung được chọn dựa vào
 * slug của Trang (Page) hiện tại. Gán template này cho 8 Trang WordPress có
 * đúng slug liệt kê trong mảng $industries bên dưới:
 *   nganh-va-cham-oto, nganh-go-noi-that, nganh-xay-dung, nganh-hang-hai,
 *   nganh-cong-nghiep-oto, nganh-composite, nganh-dung-cu, nganh-powertrain
 */
if ( ! defined( 'ABSPATH' ) ) exit;

$industries = array(
	'nganh-va-cham-oto' => array(
		'tag'   => 'Sửa chữa va chạm ô tô',
		'title' => 'Giải pháp Mirka cho xưởng sửa chữa va chạm ô tô',
		'meta'  => 'Ngành nghề · Collision Repair',
		'intro' => 'Thợ sửa chữa va chạm ô tô hằng ngày đối mặt với bụi mài mịn, quy trình hoàn thiện tốn thời gian và lỗi bề mặt sơn. Hệ thống chà nhám không bụi (OSP) của Mirka giải quyết trực diện những vấn đề này.',
		'solution' => 'Vật liệu mài bọt <a href="' . esc_url( mirka_url( 'san-pham.html?cat=mai' ) ) . '" class="link-arrow" style="display:inline">Mirka Iridium™ Soft</a> cho chà nhám khô không bụi trên bề mặt cong; Mirka Galaxy — hạt ceramic tự mài sắc, lớp phủ chống bám dính, cấu hình lỗ Multifit; xe đẩy Modular Trolley &amp; Solution Trolley II tích hợp máy hút bụi, máy chà nhám và phụ kiện gọn trong một trạm làm việc di động; máy chà nhám điện ly tâm và máy đánh bóng khí nén.',
		'benefit' => 'Xưởng khỏe mạnh hơn nhờ giảm bụi hít vào phổi, tiết kiệm thời gian dọn dẹp sau chà nhám, giấy nhám bền hơn nhờ không bị tắc nghẽn, chất lượng bề mặt hoàn thiện tốt hơn. Nhiều xưởng ghi nhận chỉ cần thay lọc bụi theo tháng thay vì theo tuần sau khi chuyển sang hệ thống của Mirka.',
		'cta_href' => 'san-pham.html?cat=dien',
		'cta_text' => 'Xem máy chà nhám điện Mirka →',
	),
	'nganh-go-noi-that' => array(
		'tag'   => 'Gỗ &amp; Nội thất',
		'title' => 'Giải pháp Mirka cho ngành gỗ &amp; sản xuất nội thất',
		'meta'  => 'Ngành nghề · Wood Industry',
		'intro' => 'Các xưởng gỗ và nhà sản xuất nội thất cần cân bằng giữa năng suất, chất lượng bề mặt đồng đều và an toàn lao động trước bụi gỗ mịn. Mirka mang đến bộ giải pháp toàn diện từ vật liệu mài đến tự động hóa.',
		'solution' => 'Mirka Galaxy (hạt ceramic tự mài sắc, chống bám dính); Mirka Ultimax® Ligno với cấu trúc bề mặt phân đoạn tối ưu cho gỗ; máy chà nhám điện công thái học tốt hơn; hệ thống hút bụi tích hợp; giải pháp robot AIROS 353S chuyên chà nhám góc cạnh sản phẩm gỗ.',
		'benefit' => 'Công thái học tốt hơn, chất lượng bề mặt đồng đều, dụng cụ dễ sử dụng, thao tác nhanh hơn, ít rung và ồn hơn, môi trường làm việc không bụi — đặc biệt phù hợp sản xuất cửa, cửa sổ và đồ nội thất.',
		'cta_href' => 'san-pham.html?cat=mai',
		'cta_text' => 'Khám phá vật liệu mài cho gỗ →',
	),
	'nganh-xay-dung' => array(
		'tag'   => 'Xây dựng, Cải tạo &amp; Hoàn thiện nội thất',
		'title' => 'Giải pháp Mirka cho xây dựng, cải tạo &amp; hoàn thiện nội thất',
		'meta'  => 'Ngành nghề · Construction &amp; Renovation',
		'intro' => 'Thợ hoàn thiện nội thất và cải tạo công trình phải đối mặt với bụi mịn, áp lực thể chất do thao tác lặp lại, và thời gian dọn dẹp kéo dài sau khi chà nhám tường, trần.',
		'solution' => '<a href="' . esc_url( mirka_url( 'san-pham.html?cat=dien' ) ) . '" class="link-arrow" style="display:inline">Mirka® LEROS</a> — máy chà tường/trần ly tâm nhẹ và hiện đại nhất thị trường, nặng dưới 3.5kg; Mirka® DEROS — máy chà nhám ly tâm đạt giải thưởng với mô tơ brushless; Mirka® DEOS Delta — biên độ dao động lớn nhất trong các máy chà delta trên thị trường, tối ưu cho góc cạnh và bề mặt đứng; hệ thống vật liệu mài dạng lưới kết hợp máy hút bụi.',
		'benefit' => 'Bảo vệ sức khỏe nhờ loại bỏ bụi hít vào phổi, tiết kiệm thời gian không cần dọn dẹp sau chà nhám, tiết kiệm chi phí nhờ giấy nhám không bị tắc nghẽn, và cho vệt nhám mịn hơn. Một thợ chuyên nghiệp chia sẻ: "Tôi có cảm giác như mình không hề chà nhám, vì hệ thống hút bụi hiệu quả đến mức gần như không còn bụi."',
		'cta_href' => 'san-pham.html?cat=dien',
		'cta_text' => 'Xem máy chà tường LEROS →',
	),
	'nganh-hang-hai' => array(
		'tag'   => 'Đóng tàu &amp; Hàng hải',
		'title' => 'Giải pháp Mirka cho hoàn thiện bề mặt tàu thuyền',
		'meta'  => 'Ngành nghề · Marine Surface Finishing',
		'intro' => 'Hoàn thiện bề mặt tàu thuyền đòi hỏi xử lý các đường cong thân vỏ phức tạp, đạt độ bóng gelcoat hoàn hảo, đồng thời đảm bảo công thái học và sức khỏe cho đội ngũ thi công quy mô lớn.',
		'solution' => 'Mirka® LEROS-S — máy chà tường nhẹ dưới 3.2kg, đầu mài linh hoạt cho thân vỏ du thuyền; File Board dài — dụng cụ chà tay công thái học chuyên cho bề mặt vỏ tàu; dòng hợp chất đánh bóng <a href="' . esc_url( mirka_url( 'san-pham.html?cat=danhbong' ) ) . '" class="link-arrow" style="display:inline">Polarshine® Marine</a> gốc nước, không chứa silicone (Heavy, Medium, Fine) cho xử lý vết xước và phục hồi oxy hóa; vật liệu mài dạng lưới không bụi.',
		'benefit' => 'Hợp chất gốc nước loại bỏ vết xước vĩnh viễn thay vì chỉ che tạm như hợp chất gốc dung môi; chà nhám không bụi cho vệt nhám mịn hơn, giảm dọn dẹp và kéo dài tuổi thọ vật liệu mài. Các nhà đóng du thuyền như Cranchi (Ý) và Nautor\'s Swan (Phần Lan) đang sử dụng giải pháp Mirka cho hoàn thiện chất lượng cao.',
		'cta_href' => 'san-pham.html?cat=danhbong',
		'cta_text' => 'Khám phá hợp chất đánh bóng Polarshine →',
	),
	'nganh-cong-nghiep-oto' => array(
		'tag'   => 'Ngành công nghiệp ô tô',
		'title' => 'Giải pháp Mirka cho sản xuất &amp; lắp ráp ô tô (OEM)',
		'meta'  => 'Ngành nghề · Automotive Industry',
		'intro' => 'Nhà sản xuất ô tô cần duy trì chất lượng đồng nhất qua quy trình hoàn thiện phức tạp, trong khi bụi mài có thể làm hỏng lớp sơn và ảnh hưởng sức khỏe người lao động trên dây chuyền.',
		'solution' => 'Mirka Iridium™ Soft cho chà nhám khô; vật liệu mài dạng lưới không bụi cho xử lý thân xe thô (body-in-white), lớp sơn điện di (e-coat) và sơn lót; đầu chà nhám điện Mirka® AIROS tích hợp cho robot công nghiệp; hợp chất đánh bóng Mirka® PRO Iridium 1250 gốc nước.',
		'benefit' => 'Quy trình hoàn thiện lặp lại và nhất quán, giảm tỷ lệ làm lại (rework) nhờ kiểm soát chất lượng tốt hơn, giảm thiểu bụi trong môi trường sản xuất, khả năng tự động hóa hiệu quả phù hợp tích hợp vào dây chuyền OEM.',
		'cta_href' => 'san-pham.html?cat=danhbong',
		'cta_text' => 'Xem giải pháp đánh bóng công nghiệp →',
	),
	'nganh-composite' => array(
		'tag'   => 'Vật liệu Composite',
		'title' => 'Giải pháp Mirka cho mài, chà nhám &amp; đánh bóng vật liệu Composite',
		'meta'  => 'Ngành nghề · Composite',
		'intro' => 'Gia công vật liệu composite (sợi thủy tinh, sợi carbon) tiềm ẩn rủi ro nghề nghiệp cao nếu thiếu hệ thống hút bụi phù hợp — đây là lý do Mirka phát triển bộ giải pháp chuyên biệt cho ngành này.',
		'solution' => 'Abranet® — vật liệu mài lưới không bụi; Mirka Iridium™ và Galaxy cho ứng dụng công nghệ cao; Abralon® — vật liệu mài bọt cho hoàn thiện tinh; Mirlon Total® — vật liệu mài không dệt; máy chà nhám điện DEROS® II và LEROS-S Short; hợp chất Polarshine® gốc nước, trong đó Polarshine 12 Black chuyên dùng cho sợi carbon.',
		'benefit' => 'An toàn hơn nhờ công nghệ không bụi cải thiện môi trường làm việc; chất lượng hoàn thiện vượt trội cho các ứng dụng khắt khe (hàng hải, hàng không, ô tô); hiệu quả cao với dụng cụ thiết kế cho bề mặt lớn; hợp chất gốc nước loại bỏ vết xước vĩnh viễn thay vì che tạm.',
		'cta_href' => 'san-pham.html?cat=mai',
		'cta_text' => 'Khám phá Abranet® &amp; Abralon® →',
	),
	'nganh-dung-cu' => array(
		'tag'   => 'Sản xuất dụng cụ',
		'title' => 'Giải pháp Mirka cho mài chính xác trong sản xuất dụng cụ',
		'meta'  => 'Ngành nghề · Tool Manufacturing',
		'intro' => 'Sản xuất dụng cụ hợp kim cứng (tungsten carbide) và lưỡi cưa đòi hỏi giải pháp mài chính xác cân bằng giữa hiệu suất, tuổi thọ đá mài và ổn định nhiệt trong suốt quá trình gia công.',
		'solution' => 'Mirka® Cafro Ultra-Flute — đá mài siêu mài mòn (superabrasive) chuyên cho dụng cụ hợp kim cứng nguyên khối, cấu trúc rìa mài xốp giúp tối ưu hiệu suất mài mà không tăng tiêu thụ năng lượng; Mirka® Cafro E-Cup 11 — đá mài cốc dạng bonded hybrid mới, hiệu quả cao hơn và giảm tác động môi trường.',
		'applications' => 'Sản xuất dụng cụ tròn (mũi phay, mũi khoan, dao doa, dao tarô), mài đỉnh/mài mặt/tạo biên dạng lưỡi cưa, gia công thép, hợp kim Stellite và tungsten carbide.',
		'benefit' => 'Độ chính xác cao, lực cắt mạnh, tuổi thọ đá mài dài và kiểm soát nhiệt tốt — đúng với triết lý "tận tâm với sự hoàn thiện" của Mirka.',
		'cta_href' => '',
		'cta_text' => '',
	),
	'nganh-powertrain' => array(
		'tag'   => 'Truyền động (Powertrain)',
		'title' => 'Giải pháp Mirka cho gia công linh kiện truyền động ô tô',
		'meta'  => 'Ngành nghề · Powertrain',
		'intro' => 'Ngành truyền động ô tô đòi hỏi dung sai cực kỳ chặt chẽ, tiến độ gấp rút và áp lực không ngừng hướng tới sự hoàn hảo trong từng chi tiết gia công.',
		'solution' => 'Màng mài MI231B với công nghệ chống trượt tiên tiến, chuyên đánh bóng trục khuỷu (crankshaft) và trục cam (camshaft), giúp giảm số lần thay cuộn, giảm dừng máy và giảm sai lệch sản xuất; đá mài siêu mài mòn Mirka Cafro CBN dạng vitrified, tùy biến đường kính tới 600mm (hoặc 900mm dạng phân đoạn), với thân thép, bakelite hoặc sợi carbon; đá mài Mini Worm Grinding Wheels mới cho chi tiết có biên dạng phức tạp.',
		'benefit' => 'Giảm chi phí trên mỗi đơn vị sản phẩm, cải thiện hiệu năng chi tiết, kết quả bề mặt ổn định và có thể lặp lại, kéo dài tuổi thọ đá mài và giãn chu kỳ sửa đá (dressing), cùng chuỗi cung ứng toàn cầu với hỗ trợ kỹ thuật tại chỗ giúp tránh gián đoạn sản xuất.',
		'cta_href' => '',
		'cta_text' => '',
	),
);

$slug = get_post_field( 'post_name' );
$data = isset( $industries[ $slug ] ) ? $industries[ $slug ] : null;

get_header();
?>

<?php if ( $data ) : ?>

<!-- BREADCRUMB -->
<div class="pd-breadcrumb-wrap">
  <div class="container">
    <div class="breadcrumb">Trang chủ <span>›</span> <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>">Kiến thức</a> <span>›</span> <?php echo wp_kses_post( $data['tag'] ); ?></div>
  </div>
</div>

<!-- ARTICLE -->
<section class="products">
  <div class="container">
    <span class="news-tag"><?php echo wp_kses_post( $data['tag'] ); ?></span>
    <h1 class="page-title"><?php echo wp_kses_post( $data['title'] ); ?></h1>
    <p class="article-meta"><?php echo esc_html( $data['meta'] ); ?></p>
    <p class="page-desc"><?php echo esc_html( $data['intro'] ); ?></p>

    <div class="pd-tab-panel">
      <h3>Sản phẩm &amp; giải pháp</h3>
      <p><?php echo wp_kses_post( $data['solution'] ); ?></p>

      <?php if ( ! empty( $data['applications'] ) ) : ?>
      <h3>Ứng dụng</h3>
      <p><?php echo esc_html( $data['applications'] ); ?></p>
      <?php endif; ?>

      <h3>Lợi ích thực tế</h3>
      <p><?php echo wp_kses_post( $data['benefit'] ); ?></p>

      <?php if ( ! empty( $data['cta_href'] ) ) : ?>
      <a href="<?php echo mirka_url( $data['cta_href'] ); ?>" class="link-arrow"><?php echo esc_html( $data['cta_text'] ); ?></a>
      <?php endif; ?>

      <div class="industry-products" style="margin-top:40px;">
        <h3 style="margin-bottom:16px;">Sản phẩm gợi ý cho ngành này</h3>
        <div class="product-grid" id="industryProductGrid"></div>
        <p style="margin-top:20px;"><a href="<?php echo mirka_url( 'san-pham.html' ); ?>" class="link-arrow">Xem toàn bộ danh mục sản phẩm →</a></p>
      </div>

      <div class="pd-contact-band">
        <p>Cần tư vấn giải pháp cho ngành của bạn? <strong>0907 811 767</strong></p>
        <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="btn btn-primary">Yêu cầu tư vấn</a>
      </div>
    </div>

    <p style="margin-top:34px;"><a href="<?php echo mirka_url( 'bai-viet.html' ); ?>" class="link-arrow">← Xem tất cả bài viết</a></p>
  </div>
</section>

<?php else : ?>

<section class="products">
  <div class="container">
    <h1 class="page-title">Không tìm thấy nội dung ngành nghề</h1>
    <p class="page-desc">Slug trang này (<code><?php echo esc_html( $slug ); ?></code>) không khớp với dữ liệu nào. Kiểm tra lại slug của Trang, phải là một trong: nganh-va-cham-oto, nganh-go-noi-that, nganh-xay-dung, nganh-hang-hai, nganh-cong-nghiep-oto, nganh-composite, nganh-dung-cu, nganh-powertrain.</p>
  </div>
</section>

<?php endif; ?>

<?php get_footer(); ?>
