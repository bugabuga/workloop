<!-- Initialize Swiper -->
var story_swiper = new Swiper('#story_swiper', {
	spaceBetween: 30,
	effect: 'fade',
	speed: 100,
	pagination: {
		el: '#story_swiper_pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + ' bullet bullet-' + (index + 1) + '"></span>';
		}
	}
});

if ( $('.principles_js').is(':visible') ) {
	<!-- Initialize Swiper -->
	var story_swiper = new Swiper('#story_mobile_swiper', {
		spaceBetween: 30,
		effect: 'fade',
		speed: 200,
		pagination: {
			el: '#story_mobile_swiper_pagination',
			dynamicBullets: true,
		}
	});
}

function leftBar(height) {
	$('#left_border').css('height', height / 14 + 'em');
}

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 && window.innerWidth > 768 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}
});


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


	if (scroll_trigger >= 400) {

		var left_bar_height = (((scrollPosition - 400) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var left_bar_height_boost = (((scrollPosition - (1600 * window_ratio)) / window_ratio) / 1.2) * 1.66 / speed_ratio;

		if (scroll_trigger > 1600) {
			leftBar(left_bar_height + left_bar_height_boost);
		} else if (scroll_trigger < 1600) {
			leftBar(left_bar_height);
		}
	}

});