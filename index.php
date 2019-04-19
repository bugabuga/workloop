<?php

get_header(); ?>

	<section id="hero" class="hero hero-blog">
		<div class="hero-container">
			<h1 class="hero-text">
				Company <br>
				blog
			</h1>
		</div>
	</section>

	<section id="resources" class="resources">
		<div class="blog-purple-shape"></div>
        <div class="blog-yellow-shape"></div>
        <div id="left_border_static" class="left-border"></div>
        <div id="right_border" class="right-border"></div>
		<div class="blog">
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
                get_template_part( 'template-parts/post/content', get_post_format() );?>
                <div class="blog-post">
                    <div class="blog-image">
                        <?php the_post_thumbnail( ) ?>
                    </div>
                    <div class="blog-content">
                        <div class="blog-specs">
                            <?php echo get_the_date('M j'); ?> | <?php the_author(); ?>
                        </div>
                        <h2 class="blog-title">
                            <a class="blog-title-link" href="<?php the_permalink(); ?>"><?php the_title() ?></a>
                        </h2>
                        <div class="blog-text">
                            <?php the_excerpt(); ?>
                        </div>
                        <a href="<?php the_permalink();?>" class="btn btn-secondary">Learn more</a>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php global $wp_query;
            if (  $wp_query->max_num_pages > 1 ) : ?>
                <script>
                    var ajaxurl = '<?php echo site_url() ?>/wp-admin/admin-ajax.php';
                    var true_posts = '<?php echo serialize($wp_query->query_vars); ?>';
                    var current_page = <?php echo (get_query_var('paged')) ? get_query_var('paged') : 1; ?>;
                    var max_pages = '<?php echo $wp_query->max_num_pages; ?>';
                </script>
                <div class="load-more">
                    <a class="btn btn-secondary" id="true_loadmore">Load more</a>
                </div>
            <?php endif; ?>
            <?php else: ?>
            <div class="no-posts">
                No posts found. <a class="link-home" href="/resources">Go to blog list.</a>
            </div>
            <?php endif; ?>
		</div>

	</section>

	<section id="interested" class="interested">
		<div class="interested-title">
			Want to learn more?
		</div>
		<div class="interested-buttons">
			<a href="/contact" class="btn btn-primary">Contact us</a>
		</div>
	</section>

<?php  get_footer(); ?>