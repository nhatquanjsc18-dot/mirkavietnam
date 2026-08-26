<?php
/**
 * Fallback cho các Trang (Page) không gán template riêng.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>
<section class="products">
  <div class="container">
    <?php while ( have_posts() ) : the_post(); ?>
      <h1 class="page-title"><?php the_title(); ?></h1>
      <div class="page-desc"><?php the_content(); ?></div>
    <?php endwhile; ?>
  </div>
</section>
<?php get_footer(); ?>
