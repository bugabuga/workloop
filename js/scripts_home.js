function is_touch_device() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

function rightBar(height) {
	$('#right_border').css('height', height / 14 + 'em');
}

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 && window.innerWidth > 768 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}

	$('#chat_now_js').on('click', function() {
		if ($(this).hasClass('chat-expanded')) {
			olark('api.box.shrink');
			$(this).removeClass('chat-expanded');
		} else {
			olark('api.box.expand');
			$(this).addClass('chat-expanded');
		}
	});
});

var edge_even = $(".edge-block-slide._cultural, .edge-block-slide._people, .edge-block-slide._monsters");
var edge_odd = $(".edge-block-slide._agility, .edge-block-slide._tech");

function channelsMove(even, odd) {
	edge_even.css('transform', 'translate(0,' + even + 'em)');
	edge_odd.css('transform', 'translate(0,' + odd + 'em)');
}

if (window.innerWidth > 768) {
	var edge_trigger = false;
	var window_ratio = window.innerWidth / 1440;
	var speed_ratio = window.innerWidth / window.innerHeight;

	$(window).on('scroll', function(){
		var scrollPosition = $(window).scrollTop();
		var scroll_trigger = scrollPosition / window_ratio;
		var edge_images = $('.edge-block-slide-image');
		var home_welcome = $('.description-cloud');

		if (scrollPosition >= 50) {
			// Show back to top button
			navigation.addClass('_floating animate');
		} else {
			navigation.removeClass('_floating');
		}

		if (scroll_trigger >= 300) {
			home_welcome.addClass('_move');
		} else if (scroll_trigger < 200) {
			home_welcome.removeClass('_move');
		}

		if (scroll_trigger >= 650) {

			var right_bar_height = (((scrollPosition - 650) / window_ratio) / 1.5) * 1.8 / speed_ratio;
			var right_bar_height_boost = (((scrollPosition - (1600 * window_ratio)) / window_ratio) / 2) * 1.8 / speed_ratio;

			if (scroll_trigger > 1600) {
				rightBar(right_bar_height + right_bar_height_boost);
			} else if (scroll_trigger < 1600) {
				rightBar(right_bar_height);
			}
		}

		if (scroll_trigger >= 1650) {

			var edge_movement = - (scroll_trigger - 1650) / (14 * 2);

			if (edge_movement < -200/14) {
				edge_trigger = true;
				channelsMove(-200/14, 50/14);
			}

			if (edge_trigger === false) {
				channelsMove(edge_movement, -edge_movement * 0.25);
				edge_images.css('background-position', 'center ' + edge_movement * 0.3 + 'em');
			}
		}

		if (this.oldScroll > this.scrollY) {
			edge_trigger = false;
		}

		this.oldScroll = this.scrollY;

	});
}


