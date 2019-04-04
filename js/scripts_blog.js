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


