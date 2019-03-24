function rightBar(height) {
	$('#right_border').css('height', height + 'px');
}

var dots_top = $('.dots-top');
var dots_middle = $('.dots-middle');
var dots_bottom = $('.dots-bottom');

function dotsMoveTop(move) {
	dots_top.css('transform', 'translate(0,' + move + 'em)');
}

function dotsMoveMiddle(move) {
	dots_middle.css('transform', 'translate(' + move + 'em, 0)');
}

function dotsMoveBottom(move) {
	dots_bottom.css('transform', 'translate(0,' + move + 'em)');
}

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 ) {
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


	// if (scroll_trigger >= 1000) {
	// 	$('.reasons-item').addClass('move');
	// }
	//
	// if (scroll_trigger < 300) {
	// 	$('.reasons-item').removeClass('move');
	// }

	if (scroll_trigger >= 20) {

		var right_bar_height = (((scrollPosition - 200) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (800 * window_ratio)) / window_ratio) / 1.1) * 1.66 / speed_ratio;


		if (scroll_trigger > 800) {
			rightBar(right_bar_height + right_bar_height_boost);
		} else {
			rightBar(right_bar_height);
		}
	}


	var dots_movement = - (scroll_trigger - 1000) / (60 * 2);

	dotsMoveTop(dots_movement * 2);
	dotsMoveMiddle(dots_movement * 4);
	dotsMoveBottom(dots_movement * 0.7);

});