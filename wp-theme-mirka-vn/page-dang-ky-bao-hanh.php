<?php
/**
 * Template Name: Trang: Đăng ký bảo hành
 * Gán template này cho một Trang (Page) có slug "dang-ky-bao-hanh".
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<!-- BREADCRUMB -->
<div class="pd-breadcrumb-wrap">
  <div class="container">
    <div class="breadcrumb">Trang chủ <span>›</span> Hỗ trợ <span>›</span> Đăng ký bảo hành</div>
  </div>
</div>

<!-- CONTENT -->
<section class="products">
  <div class="container">
    <span class="eyebrow-dark">Hỗ trợ khách hàng</span>
    <h1 class="page-title">Đăng ký bảo hành sản phẩm Mirka</h1>
    <p class="page-desc">Đăng ký trong vòng 30 ngày kể từ ngày mua để được cộng thêm 1 năm bảo hành miễn phí, áp dụng cho dụng cụ điện Mirka chính hãng do Nhất Quán phân phối. Xem đầy đủ <a href="<?php echo esc_url( mirka_url( 'dieu-khoan-bao-hanh.html' ) ); ?>" class="link-arrow" style="display:inline">điều khoản bảo hành</a>.</p>

    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-card">
          <span class="mini-tag">Dụng cụ dùng trong công nghiệp</span>
          <p class="contact-value">Bảo hành tiêu chuẩn 1 năm</p>
          <p class="contact-note">Áp dụng cho hầu hết dụng cụ điện Mirka sử dụng trong sản xuất, gia công công nghiệp nói chung.</p>
        </div>
        <div class="contact-card">
          <span class="mini-tag">Dụng cụ dùng trong ngành sơn sửa ô tô</span>
          <p class="contact-value">Bảo hành tiêu chuẩn 2 năm</p>
          <p class="contact-note">Áp dụng cho dụng cụ điện Mirka sử dụng tại xưởng sơn, sửa chữa va chạm ô tô.</p>
        </div>
        <div class="contact-card">
          <span class="mini-tag">Đăng ký trong 30 ngày</span>
          <p class="contact-value">+1 năm bảo hành miễn phí</p>
          <p class="contact-note">Cộng thêm vào thời hạn tiêu chuẩn ở trên, không phân biệt ngành nghề sử dụng.</p>
        </div>
        <div class="contact-card contact-card-note">
          <p><strong>Hồ sơ cần chuẩn bị:</strong> hóa đơn/phiếu mua hàng, mã sản phẩm (in trên thân máy hoặc tem nhãn). Đội ngũ Nhất Quán sẽ liên hệ xác nhận sau khi nhận đăng ký.</p>
        </div>
      </div>

      <div id="contactFormWrap">
        <form class="contact-form" id="contactForm">
          <h2>Đăng ký bảo hành</h2>
          <p class="contact-form-desc">Điền đầy đủ thông tin bên dưới, Nhất Quán sẽ xác nhận đăng ký bảo hành qua điện thoại hoặc email.</p>
          <div class="form-group">
            <label for="wfName">Họ và tên</label>
            <input type="text" id="wfName" name="name" required>
          </div>
          <div class="form-group">
            <label for="wfPhone">Số điện thoại</label>
            <input type="tel" id="wfPhone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="wfModel">Model máy / Mã sản phẩm</label>
            <input type="text" id="wfModel" name="model" placeholder="Vd: DEROS II 550 EU" required>
          </div>
          <div class="form-group">
            <label for="wfSerial">Số serial</label>
            <input type="text" id="wfSerial" name="serial" placeholder="In trên tem nhãn/thân máy" required>
          </div>
          <div class="form-group">
            <label for="wfDate">Ngày mua hàng</label>
            <input type="date" id="wfDate" name="purchaseDate">
          </div>
          <div class="form-group">
            <label for="wfStore">Nơi mua hàng</label>
            <input type="text" id="wfStore" name="store" placeholder="Đại lý / cửa hàng đã mua">
          </div>
          <div class="form-group">
            <label for="wfMessage">Ghi chú</label>
            <textarea id="wfMessage" name="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary contact-submit">Gửi đăng ký bảo hành →</button>
        </form>
      </div>

      <div class="contact-success" id="contactSuccess" hidden>
        <div class="contact-success-icon">✅</div>
        <h2>Đã nhận được đăng ký bảo hành!</h2>
        <p>Cảm ơn bạn đã đăng ký. Đội ngũ Nhất Quán sẽ xác nhận thời hạn bảo hành qua điện thoại hoặc email trong vòng 24 giờ làm việc.<br>Cần hỗ trợ ngay? Gọi hotline <strong><a href="tel:0907811767">0907 811 767</a></strong>.</p>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
