<?php
/**
 * Footer dùng chung cho mọi trang.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<!-- FOOTER -->
<footer class="site-footer" id="contact">
  <div class="container footer-grid">
    <div class="footer-col footer-brand">
      <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/site/mirka-logo.svg' ); ?>" alt="Mirka" class="logo-img footer-logo">
      <p>Nội dung và hình ảnh sản phẩm tham khảo từ mirka.com. Trang web thuộc quyền sở hữu của CÔNG TY CP-CN NHẤT QUÁN nhà phân phối chính hãng MIRKA tại VIỆT NAM.</p>
      <a href="<?php echo mirka_url( 'lien-he.html' ); ?>" class="btn btn-primary footer-cta">Liên hệ báo giá</a>
      <div class="social-icons">
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3H13.5V8c0-.9.2-1.5 1.6-1.5h1.6V3.9C16.4 3.8 15.4 3.7 14.2 3.7c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3H10v8h3.5z"/></svg></a>
        <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM10 15.3V8.7l5.8 3.3-5.8 3.3z"/></svg></a>
        <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3h-2.8v11.4c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .5 0 .8.1V8.9c-.3 0-.5-.1-.8-.1-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4V9.1c1.1.8 2.4 1.3 3.8 1.3V7.6c-2-.1-3.6-1.8-3.7-4.6z"/></svg></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Hiệu suất vượt trội cùng Mirka</h4>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=mai' ); ?>">Vật liệu mài &amp; Hợp chất</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=dien' ); ?>">Máy &amp; Dụng cụ điện</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=khinen' ); ?>">Máy &amp; Dụng cụ khí nén</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=robot' ); ?>">Robot &amp; Tự động hóa</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=pin' ); ?>">Máy dùng pin</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=hutbui' ); ?>">Máy hút bụi</a>
      <a href="<?php echo mirka_url( 'san-pham.html?cat=phukien' ); ?>">Phụ kiện &amp; Vật tư tiêu hao</a>
      <a href="<?php echo mirka_url( 'san-pham.html' ); ?>">Tất cả sản phẩm</a>
    </div>
    <div class="footer-col">
      <h4>Công ty</h4>
      <a href="<?php echo mirka_url( 'index.html#about' ); ?>">Giới thiệu</a>
      <a href="<?php echo mirka_url( 'nha-phan-phoi-mirka.html' ); ?>">Nhà phân phối Mirka</a>
      <a href="<?php echo mirka_url( 'bai-viet.html' ); ?>">Tin tức</a>
      <a href="<?php echo mirka_url( 'index.html#industries' ); ?>">Ngành nghề</a>
    </div>
    <div class="footer-col">
      <h4>Hỗ trợ</h4>
      <a href="<?php echo mirka_url( 'lien-he.html' ); ?>">Tìm đại lý</a>
      <a href="<?php echo mirka_url( 'dang-ky-bao-hanh.html' ); ?>">Đăng ký bảo hành</a>
      <a href="<?php echo mirka_url( 'lien-he.html' ); ?>">Liên hệ</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>NHÀ PHÂN PHỐI MIRKA TẠI VIỆT NAM</span>
  </div>
</footer>

<!-- FLOATING CALL BUTTON -->
<a class="fab-call" href="tel:0907811767" aria-label="Gọi ngay 0907 811 767">
  <span class="fab-call-icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.9a2 2 0 0 1-.4 2.1L8 10a16 16 0 0 0 6 6l1.3-1.4a2 2 0 0 1 2.1-.4c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 2.1z"></path></svg>
  </span>
  <span class="fab-call-number">0907 811 767</span>
</a>

<?php wp_footer(); ?>
</body>
</html>
