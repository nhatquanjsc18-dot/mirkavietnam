<?php
/**
 * Fallback bắt buộc của WordPress (blog listing / mọi truy vấn khác không khớp
 * front-page.php, page-*.php, page.php). Theme này không dùng blog post,
 * nên chỉ hiển thị tối giản để tránh lỗi "trắng trang" nếu có truy cập lạc.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section class="products">
  <div class="container">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <h1 class="page-title"><?php the_title(); ?></h1>
        <div class="page-desc"><?php the_content(); ?></div>
      <?php endwhile; ?>
    <?php else : ?>
      <h1 class="page-title">Không tìm thấy nội dung</h1>
      <p class="page-desc"><a href="<?php echo mirka_url( 'index.html' ); ?>" class="link-arrow">← Về trang chủ</a></p>
    <?php endif; ?>
  </div>
</section>
<?php get_footer(); ?>
