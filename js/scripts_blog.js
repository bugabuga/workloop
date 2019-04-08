var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 && window.innerWidth > 768 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}

	var n = $('.blog-post').length;

	if ( n <= 3 ) {
		$('.blog').addClass('_start');
	} else return false;

	updateThumb();
});

function rightBar(height) {
	$('#right_border').css('height', height / 14 + 'em');
}

var window_ratio = window.innerWidth / 1440;
var speed_ratio = window.innerWidth / window.innerHeight;

$(window).on('scroll', function(){
	var scrollPosition = $(window).scrollTop();
	var scroll_trigger = scrollPosition / window_ratio;

	if (scrollPosition >= 50) {
		// Show back to top button
		navigation.addClass('_floating animate');
	} else {
		navigation.removeClass('_floating');
	}

	if (scroll_trigger >= 100 && window.innerWidth > 768) {

		var right_bar_height = (((scrollPosition - 100) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (600 * window_ratio)) / window_ratio) / 2) * 1.66 / speed_ratio;

		if (scroll_trigger > 600) {
			rightBar(right_bar_height + right_bar_height_boost);
		} else {
			rightBar(right_bar_height);
		}
	}

});

window.addEventListener("resize", function () {
	updateThumb();
});

function updateThumb() {
	var thumb_width = $('.blog-post:first-child .blog-image').width();
	var thumb_height = $('.blog-post:first-child .blog-image').height();

	var img_width = $('.blog-post:first-child .blog-image img').width();
	var img_height = $('.blog-post:first-child .blog-image img').height();

	var thumb = $('.blog-post:first-child .blog-image img');

	if ( img_width / thumb_width < img_height / thumb_height) {
		thumb.css({
			'width': img_width / (img_width / thumb_width)  + 'px',
			'height': img_height / (img_width / thumb_width) + 'px',
			'top': '-' + ( (img_height / (img_width / thumb_width)) - thumb_height ) / 2 + 'px'
		});
	} else {
		thumb.css({
			'width': img_width / (img_height / thumb_height)  + 'px',
			'height': img_height / (img_width / thumb_width) + 'px',
			'left': '-' + ( (img_width / (img_height / thumb_height)) - thumb_width ) / 2 + 'px'
		});
	}
}
