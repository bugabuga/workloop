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
			<?php $args = array(
				'posts_per_page' => 7,
				'offset' => 0,
				'category' => '',
				'category_name' => '',
				'orderby' => 'date',
				'order' => 'DESC',
				'include' => '', 'exclude' => '',
				'meta_key' => '',
				'meta_value' => '',
				'post_type' => 'post', 'post_mime_type' => '',
				'post_parent' => '',
				'author' => '',
				'post_status' => 'publish',
				'suppress_filters' => true
			);

			$myposts = get_posts( $args );

			foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
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
			<?php
				endforeach;
				wp_reset_postdata();
			?>
		</div>

	</section>

	<section id="interested" class="interested">
		<div class="interested-title">
			Ready to connect?
		</div>
		<div class="interested-buttons">
			<a href="/contact" class="btn btn-primary">Contact us</a>
		</div>
	</section>

<?php  get_footer(); ?>