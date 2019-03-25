<?php
/*
Template Name: Home
Template Post Type: page
 */

get_header(); ?>

<?php
	$page = get_page_by_title( 'home' );
	$content = apply_filters('the_content', $page->post_content);
	echo $content;
?>

	<section id="resources" class="resources">
		<h3 class="resources-title"><span class="letter-r">R</span>esources</h3>
		<div class="resources-blog blog">


			<?php $args = array(
				'posts_per_page' => 3,
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
					<div class="blog-specs">
						<?php echo get_the_date('M j'); ?> | <?php the_author(); ?>
					</div>
					<div class="blog-title">
						<a class="blog-title-link" href="<?php the_permalink(); ?>"><?php the_title() ?></a>
					</div>
					<div class="blog-text">
						<?php the_excerpt(); ?>
					</div>
					<a href="<?php the_permalink();?>" class="btn btn-secondary">Learn more</a>
				</div>
			<?php
				endforeach;
				wp_reset_postdata();
			?>
		</div>
	</section>

	<section id="connect" class="connect">

		<div class="left-border"></div>

		<div class="connect-title">Connect with us</div>
		<div class="connect-subtitle">
			Pick a channel so we can get things started!
		</div>
		<div class="contact">
			<form action="" class="contact-form">
                <input type="hidden" name="project_name" value="Workloop Home Page">
                <input type="hidden" name="admin_email" value="admin@theworkloop.com">
                <!--<input type="hidden" name="admin_email" value="buha903@gmail.com">-->
                <input type="hidden" name="form_subject" value="Workloop Home Page">

                <div class="message-sent js-message-sent">
                    Message Sent
                </div>

                <div class="contact-info">
                    <input type="text" name="name" id="name" class="contact-input" placeholder="Enter your name">
                    <input type="text" name="email" id="email" class="contact-input" placeholder="Enter your e-mail">
                </div>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                <button class="contact-submit" type="submit">SEND</button>
            </form>
			<div class="contact-buttons">
				<a href="tel:+14162273400" class="contact-button lets-talk">
					<i class="icon"></i>
					<span>Let's talk</span>
				</a>
				<a href="javascript:void(0);" id="chat_now_js" class="contact-button chat-now">
					<i class="icon"></i>
					<span>Chat now!</span>
				</a>
			</div>
		</div>
	</section>

<?php  get_footer(); ?>