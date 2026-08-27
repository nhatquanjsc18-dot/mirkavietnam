<?php
/**
 * Template Name: Trang: Liên hệ
 * Gán template này cho một Trang (Page) có slug "lien-he".
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<!-- CONTACT -->
<section class="products">
  <div class="container">
    <div class="breadcrumb">Trang chủ <span>›</span> Liên hệ</div>
    <span class="eyebrow-dark">Nhà phân phối chính hãng Mirka tại Việt Nam</span>
    <h1 class="page-title">Liên hệ với Nhất Quán</h1>
    <p class="page-desc">Đội ngũ kỹ thuật của Nhất Quán sẵn sàng tư vấn lựa chọn máy chà nhám, vật liệu mài và đánh bóng Mirka phù hợp, báo giá và hỗ trợ sau bán hàng cho khách hàng trên toàn quốc.</p>

    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-card">
          <span class="mini-tag">Hotline tư vấn kỹ thuật</span>
          <p class="contact-value"><a href="tel:0907811767">0907 811 767</a></p>
          <p class="contact-note">T2 - T6: 08:00 - 17:00 · T7: 08:00 - 16:00</p>
        </div>
        <div class="contact-card">
          <span class="mini-tag">Email báo giá &amp; hỗ trợ</span>
          <p class="contact-value"><a href="mailto:hoai@nhatquan.vn">hoai@nhatquan.vn</a></p>
          <p class="contact-note">Phản hồi trong vòng 24 giờ làm việc</p>
        </div>
        <div class="contact-card">
          <span class="mini-tag">Văn phòng đại diện</span>
          <p class="contact-value">10 Đường số 18A, Khu B, Bình Trưng, TP. Hồ Chí Minh</p>
          <p class="contact-note">Liên hệ trước khi đến để được hỗ trợ tốt nhất</p>
          <a href="https://www.google.com/maps/search/?api=1&query=10+%C4%90%C6%B0%E1%BB%9Dng+s%E1%BB%91+18A%2C+Kh%E1%BB%A5+B%2C+B%C3%ACnh+Tr%C6%B0ng%2C+TP.+H%E1%BB%93+Ch%C3%AD+Minh" class="link-arrow" target="_blank" rel="noopener">Mở trong Google Maps →</a>
        </div>
        <div class="contact-card contact-card-note">
          <p><strong>Đại lý &amp; phân phối:</strong> Nhất Quán là nhà phân phối chính hãng Mirka tại Việt Nam. Nếu bạn muốn trở thành đại lý hoặc cần báo giá số lượng lớn, hãy gửi thông tin qua form hoặc gọi trực tiếp hotline.</p>
        </div>
      </div>

      <div id="contactFormWrap">
        <form class="contact-form" id="contactForm" data-form-type="lien-he">
          <h2>Gửi yêu cầu tư vấn</h2>
          <p class="contact-form-desc">Điền thông tin bên dưới, Nhất Quán sẽ liên hệ lại để tư vấn sản phẩm và báo giá phù hợp.</p>
          <input type="text" name="website" class="hp-field" tabindex="-1" autocomplete="off">
          <div class="form-group">
            <label for="cfName">Họ và tên</label>
            <input type="text" id="cfName" name="name" required>
          </div>
          <div class="form-group">
            <label for="cfPhone">Số điện thoại</label>
            <input type="tel" id="cfPhone" name="phone" required>
          </div>
          <div class="form-group">
            <label for="cfEmail">Email</label>
            <input type="email" id="cfEmail" name="email">
          </div>
          <div class="form-group">
            <label for="cfCompany">Công ty / Đơn vị</label>
            <input type="text" id="cfCompany" name="company">
          </div>
          <div class="form-group">
            <label for="cfProduct">Sản phẩm quan tâm</label>
            <select id="cfProduct" name="product">
              <option value="">-- Chọn nhóm sản phẩm --</option>
              <option value="dien">Máy chà nhám điện</option>
              <option value="khinen">Máy chà nhám khí nén</option>
              <option value="pin">Máy chà nhám dùng pin</option>
              <option value="mai">Vật liệu mài</option>
              <option value="danhbong">Đánh bóng</option>
              <option value="hutbui">Máy hút bụi</option>
              <option value="phukien">Phụ kiện &amp; Hút bụi</option>
              <option value="khac">Khác / Chưa rõ</option>
            </select>
          </div>
          <div class="form-group">
            <label for="cfMessage">Nội dung cần tư vấn</label>
            <textarea id="cfMessage" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary contact-submit">Gửi yêu cầu →</button>
          <p class="contact-error" id="contactError" hidden>Có lỗi xảy ra khi gửi, vui lòng thử lại hoặc gọi hotline <strong><a href="tel:0907811767">0907 811 767</a></strong>.</p>
        </form>
      </div>

      <div class="contact-success" id="contactSuccess" hidden>
        <div class="contact-success-icon">✅</div>
        <h2>Đã nhận được yêu cầu của bạn!</h2>
        <p>Cảm ơn bạn đã liên hệ với Nhất Quán. Đội ngũ kỹ thuật sẽ gọi lại trong vòng 24 giờ làm việc.<br>Cần hỗ trợ ngay? Gọi hotline <strong><a href="tel:0907811767">0907 811 767</a></strong>.</p>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
