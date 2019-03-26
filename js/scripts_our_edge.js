$('.toggle').click(function(e) {
	e.preventDefault();

	var $this = $(this);
	var list = $('.edge-accordion li');
	list.removeClass('move-up move-down');

	if ($this.next().parent().hasClass('show')) {
		$this.next().parent().removeClass('show');
	} else {
		$this.parent().parent().find('li').removeClass('show');
		$this.next().parent().toggleClass('show');
		$this.parent().prev().toggleClass('move-up');
		$this.parent().next().toggleClass('move-down');
	}

	// setTimeout(function(){
		$('html, body').stop().animate({
			scrollTop: ($this.parent().find('.inner').offset().top - 240)
		}, 200);
	// }, 300);
});

function leftBar(height) {
	$('#left_border').css('height', height / 14 + 'em');
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


	if (scroll_trigger >= 200) {

		var left_bar_height = (((scrollPosition - 200) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var left_bar_height_boost = (((scrollPosition - (1600 * window_ratio)) / window_ratio) / 1.2) * 1.66 / speed_ratio;

		if (scroll_trigger > 1600) {
			leftBar(left_bar_height + left_bar_height_boost);
		} else if (scroll_trigger < 1600) {
			leftBar(left_bar_height);
		}
	}

});