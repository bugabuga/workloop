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
?>