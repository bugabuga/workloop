<?php
/*
Template Name: Our Story
Template Post Type: page
 */

get_header(); ?>

<?php
	$page = get_page_by_title( 'our story' );
	$content = apply_filters('the_content', $page->post_content);
	echo $content;
?>

<?php get_footer(); ?>