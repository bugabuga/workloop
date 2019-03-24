function rightBar(height) {
	$('#right_border').css('height', height + 'px');
}

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}

	$('#chat_now_js').on('click', function() {
		if ($(this).hasClass('chat-expanded')) {
			olark('api.box.shrink');
			$(this).removeClass('chat-expanded')
		} else {
			olark('api.box.expand');
			$(this).addClass('chat-expanded')
		}
	});
});

var edge_even = $(".edge-block-slide._tech, .edge-block-slide._people");

function channelsMove(odd) {
	edge_even.css('transform', 'translate(0,' + odd + 'em)');
}

var edge_trigger = false;
var window_ratio = window.innerWidth / 1440;
var speed_ratio = window.innerWidth / window.innerHeight;

$(window).on('scroll', function(){
	var scrollPosition = $(window).scrollTop();
	var scroll_trigger = scrollPosition / window_ratio;
	var edge_images = $('.edge-block-slide-image');

	if (scrollPosition >= 50) {
		// Show back to top button
		navigation.addClass('_floating animate');
	} else {
		navigation.removeClass('_floating');
	}


	if (scroll_trigger >= 650) {

		var right_bar_height = (((scrollPosition - 650) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (1600 * window_ratio)) / window_ratio) / 2) * 1.66 / speed_ratio;

		if (scroll_trigger > 1600) {
			rightBar(right_bar_height + right_bar_height_boost);
		} else if (scroll_trigger < 1600) {
			rightBar(right_bar_height);
		}
	}

	if (scroll_trigger >= 1600) {

		var edge_movement = - (scroll_trigger - 1600) / (14 * 2);

		if (edge_movement < -200/14) {
			edge_trigger = true;
			channelsMove(-200/14);
		}

		if (edge_trigger === false) {
			channelsMove(edge_movement);
			edge_images.css('background-position', 'center ' + edge_movement * 0.75 + 'em');
		}
	}

	if (this.oldScroll > this.scrollY) {
		if (scroll_trigger < 1500) {
			edge_trigger = false;
		}
	}

	this.oldScroll = this.scrollY;

});


