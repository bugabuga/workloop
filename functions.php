<?php

remove_filter( 'the_content', 'wpautop' );

remove_filter( 'the_excerpt', 'wpautop' );

// Add theme support for Featured Images
add_theme_support('post-thumbnails', array(
	'post',
	'page',
	'custom-post-type-name'
));

function is_blog () {
    return ( is_archive() || is_author() || is_category() || is_home() || is_single() || is_tag()) && 'post' == get_post_type();
}


// необязательно, но в некоторых случаях без этого не обойтись
global $post;

// тут можно указать post_tag (подборка постов по схожим меткам) или даже массив array('category', 'post_tag') - подборка и по меткам и по категориям
$related_tax = 'category';

// получаем ID всех элементов (категорий, меток или таксономий), к которым принадлежит текущий пост
$cats_tags_or_taxes = wp_get_object_terms( $post->ID, $related_tax, array( 'fields' => 'ids' ) );

// массив параметров для WP_Query
$args = array(
	'posts_per_page' => 3, // сколько похожих постов нужно вывести,
	'tax_query' => array(
		array(
			'taxonomy' => $related_tax,
			'field' => 'id',
			'include_children' => false, // нужно ли включать посты дочерних рубрик
			'terms' => $cats_tags_or_taxes,
			'operator' => 'IN' // если пост принадлежит хотя бы одной рубрике текущего поста, он будет отображаться в похожих записях, укажите значение AND и тогда похожие посты будут только те, которые принадлежат каждой рубрике текущего поста
		)
	)
);
$related_posts  = new WP_Query( $args );

/*
 * Remove the `wp-block-library.css` file from `wp_head()`
 *
 * @author Rahul Arora
 * @since  12182018
 * @uses   wp_dequeue_style
 */
add_action( 'wp_enqueue_scripts', function() {
  wp_dequeue_style( 'wp-block-library' );
} );


function remove_json_api () {

    // Remove the REST API lines from the HTML Header
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );

    // Remove the REST API endpoint.
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );

    // Turn off oEmbed auto discovery.
    add_filter( 'embed_oembed_discover', '__return_false' );

    // Don't filter oEmbed results.
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );

    // Remove oEmbed discovery links.
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );

}
add_action( 'after_setup_theme', 'remove_json_api' );

remove_action('wp_head', 'rsd_link'); //removes EditURI/RSD (Really Simple Discovery) link.
remove_action('wp_head', 'wlwmanifest_link'); //removes wlwmanifest (Windows Live Writer) link.
remove_action('wp_head', 'wp_generator'); //removes meta name generator.
remove_action('wp_head', 'wp_shortlink_wp_head'); //removes shortlink.
remove_action('wp_head', 'feed_links', 2 ); //removes feed links.
remove_action('wp_head', 'feed_links_extra', 3 );  //removes comments feed.


// Подгрузка постов

function true_loadmore_scripts() {
	wp_enqueue_script('jquery');
 	wp_enqueue_script( 'true_loadmore', get_stylesheet_directory_uri() . '/js/loadmore.js', array('jquery'), time() );
}

add_action( 'wp_enqueue_scripts', 'true_loadmore_scripts' );

function true_load_posts(){
	$args = unserialize(stripslashes($_POST['query']));
	$args['paged'] = $_POST['page'] + 1; // next
	$args['post_status'] = 'publish';
	$q = new WP_Query($args);
	if( $q->have_posts() ):
		while($q->have_posts()): $q->the_post(); ?>

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

	<?php endwhile;

      elseif ( $present->have_posts() ):
      while($present->have_posts()): $present->the_post(); ?>

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

	 <?php endwhile; endif; wp_reset_postdata(); die();
}

add_action('wp_ajax_loadmore', 'true_load_posts');
add_action('wp_ajax_nopriv_loadmore', 'true_load_posts');

add_action('wp_ajax_loadmore', 'true_load_posts');
add_action('wp_ajax_nopriv_loadmore', 'true_load_posts');

?>