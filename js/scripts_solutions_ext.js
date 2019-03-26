<!-- Initialize Swiper -->
var services_swiper = new Swiper('#services_swiper', {
	spaceBetween: 30,
	effect: 'fade',
	speed: 100,
	pagination: {
		el: '#services_swiper_pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"><span class="dots"></span><span class="bullet bullet-' + (index + 1) + '"></span></span>';
		}
	},
});

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}

	services_swiper.slideTo(8);
});

function rightBar(height) {
	$('#right_border').css('height', height + 'px');
}

var bullets = $('#services_swiper_pagination .swiper-pagination-bullet');
var bar_height;
var click = false;

bullets.on('click', function () {
	var border = $('#right_border');
	var border_trigger = $('#right_border .trigger');
	var bullet_position = $(this)[0].getBoundingClientRect().top;
	var border_position = border_trigger[0].getBoundingClientRect().top;
	var border_height = border.height();

	bar_height = border_height - border_position + bullet_position + (25);

	border.stop().animate({ height: bar_height + 'px', minHeight: bar_height + 'px' }, 300);

	var index = $(this).index();
	// console.log($('#services_swiper_pagination').offset().top - (140 * height_ratio) + 30 * index);
	if ( index < 4 ) {

		setTimeout(function(){
			$('html, body').stop().animate({
				scrollTop: ($('#services_swiper_pagination').offset().top - (140 * height_ratio))
			}, 300);
		}, 300);

	} else {

		setTimeout(function(){
			$('html, body').stop().animate({
				scrollTop: ($('#services_swiper_pagination').offset().top + 100 * (index - 4))
			}, 300);
		}, 300);

	}

	click = true;

	setTimeout(function(){
		click = false;
	}, 1000);

	fired = false;
	fired_1 = false;
	fired_2 = false;
	fired_3 = false;
	fired_4 = false;
	fired_5 = false;
	fired_6 = false;
	fired_7 = false;
	fired_8 = false;
	fired_up = false;
	fired_up_1 = false;
	fired_up_2 = false;
	fired_up_3 = false;
	fired_up_4 = false;
	fired_up_5 = false;
	fired_up_6 = false;
	fired_up_7 = false;
	fired_up_8 = false;
	fired_bottom = false;
	fired_border = false;
});

var fired = false;
var fired_1 = false;
var fired_2 = false;
var fired_3 = false;
var fired_4 = false;
var fired_5 = false;
var fired_6 = false;
var fired_7 = false;
var fired_8 = false;
var fired_up = false;
var fired_up_1 = false;
var fired_up_2 = false;
var fired_up_3 = false;
var fired_up_4 = false;
var fired_up_5 = false;
var fired_up_6 = false;
var fired_up_7 = false;
var fired_up_8 = false;
var fired_bottom = false;
var fired_border = false;
var fired_fixed_down = false;
var fired_fixed_up = false;
var fired_fixed = false;
var fired_release = false;

var window_ratio = window.innerWidth / 1440;
var height_ratio = window.innerHeight / 870;
var speed_ratio = window.innerWidth / window.innerHeight;


var scroll = function () {
	var scrollPosition = $(window).scrollTop();

	var scroll_trigger = scrollPosition / window_ratio;

	var page_0 = $('#services_swiper_pagination .bullet')[0].getBoundingClientRect().top;
	var page_1 = $('#services_swiper_pagination .bullet')[1].getBoundingClientRect().top;
	var page_2 = $('#services_swiper_pagination .bullet')[2].getBoundingClientRect().top;
	var page_3 = $('#services_swiper_pagination .bullet')[3].getBoundingClientRect().top;
	var page_4 = $('#services_swiper_pagination .bullet')[4].getBoundingClientRect().top;
	var page_5 = $('#services_swiper_pagination .bullet')[5].getBoundingClientRect().top;
	var page_6 = $('#services_swiper_pagination .bullet')[6].getBoundingClientRect().top;
	var page_7 = $('#services_swiper_pagination .bullet')[7].getBoundingClientRect().top;
	var page_8 = $('#services_swiper_pagination .bullet')[8].getBoundingClientRect().top;

	var services_swiper_container = $('#services_swiper');
	var services_swiper_container_top = $('#services_swiper')[0].getBoundingClientRect().top;

	var border_trigger = $('#right_border .trigger')[0].getBoundingClientRect().top;
	var right_border = $('#right_border');

	if (scrollPosition >= 50) {
		// Show back to top button
		navigation.addClass('_floating animate');
	} else {
		navigation.removeClass('_floating');
	}

	if (scroll_trigger >= 400) {

		var right_bar_height = (((scrollPosition) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (1000 * window_ratio)) / window_ratio) / 1.4) * 1.66 / speed_ratio;

		if (click === false) {

			if (scroll_trigger > 1000) {
				rightBar(right_bar_height + right_bar_height_boost);
			} else if (scroll_trigger < 1450) {
				rightBar(right_bar_height);
			}
		}
	}

	// console.log('window_ratio ' + window_ratio);
	// console.log('scrollPosition ' + scrollPosition + 'px');
	// console.log('scroll_trigger ' + scroll_trigger);
	// console.log('left_bar_height ' + left_bar_height);

	if (this.oldScroll > this.scrollY) {
		// console.log('up');
		fired = false;
		fired_1 = false;
		fired_2 = false;
		fired_3 = false;
		fired_4 = false;
		fired_5 = false;
		fired_6 = false;
		fired_7 = false;
		fired_8 = false;
		fired_fixed = false;
		fired_fixed_down = false;
		fired_bottom = false;
		fired_border = false;

		if (click === false) {

			if (right_bar_height < parseInt(right_border.css('min-height'),10)) {
				right_border.css('min-height', '0');
			}
		}

		if (border_trigger < (page_8 + 30) && border_trigger > (page_8 - 80) && fired_up_8 === false ) {
			services_swiper.slideTo(7);
			fired_up_8 = true;
		}

		if (border_trigger < (page_7 + 30) && border_trigger > (page_7 - 80) && fired_up_7 === false ) {
			services_swiper.slideTo(6);
			fired_up_7 = true;
		}

		if (border_trigger < (page_6 + 30) && border_trigger > (page_6 - 80) && fired_up_6 === false ) {
			services_swiper.slideTo(5);
			fired_up_6 = true;
		}

		if (border_trigger < (page_8 + 20) && fired_fixed_up === false) {
			services_swiper_container.addClass('_fixed').removeClass('_fixed-bottom').css('top', services_swiper_container_top + 'px');
			fired_fixed_up = true;
		}

		if (border_trigger < (page_5 + 30) && border_trigger > (page_5 - 80) && fired_up_5 === false ) {
			services_swiper.slideTo(4);
			fired_up_5 = true;
		}

		if (border_trigger < (page_4 + 30) && border_trigger > (page_4 - 80) && fired_up_4 === false ) {
			services_swiper.slideTo(3);
			fired_up_4 = true;
		}

		if (border_trigger < (page_3 + 30) && border_trigger > (page_3 - 80) && fired_up_3 === false ) {
			services_swiper.slideTo(2);
			fired_up_3 = true;
		}

		if (border_trigger < (page_2 + 30) && border_trigger > (page_2 - 80) && fired_up_2 === false ) {
			services_swiper.slideTo(1);
			fired_up_2 = true;
		}

		if (border_trigger < (page_1 + 30) && border_trigger > (page_1 - 80) && fired_up_1 === false ) {
			services_swiper.slideTo(0);
			fired_up_1 = true;
		}

		if (border_trigger < (page_1 - 400)) {
			services_swiper.slideTo(8);
		}

		if (border_trigger < (page_3 - 60) && fired_release === false) {
			services_swiper_container.removeClass('_fixed').css('top', 'auto');
			fired_release = true;
		}

		if (scroll_trigger < 1550) {
			fired_bottom = false;

			right_border.removeClass('_full _animate-down').addClass('_animate');
			setTimeout(function() {
				right_border.removeClass('_animate');
			}, 200);
		}

	} else {
		// console.log('down');

		fired_up = false;
		fired_up_1 = false;
		fired_up_2 = false;
		fired_up_3 = false;
		fired_up_4 = false;
		fired_up_5 = false;
		fired_up_6 = false;
		fired_up_7 = false;
		fired_up_8 = false;
		fired_fixed_up = false;
		fired_release = false;

		if (right_bar_height > parseInt(right_border.css('min-height'),10)) {
			right_border.css('min-height', '0');
		}

		if (border_trigger >= (page_0 + 20) && fired === false ) {
			services_swiper.slideTo(0);
			fired = true;
		}

		if (border_trigger >= (page_1 + 20) && fired_1 === false ) {
			services_swiper.slideTo(1);
			fired_1 = true;
		}

		if (border_trigger >= (page_2 + 20) && fired_2 === false ) {
			services_swiper.slideTo(2);
			fired_2 = true;
		}

		if (border_trigger >= (page_3 + 20) && fired_3 === false ) {
			services_swiper.slideTo(3);
			fired_3 = true;
		}

		if (border_trigger >= (page_3 - 60) && fired_fixed === false) {
			services_swiper_container.addClass('_fixed').css('top', services_swiper_container_top + 'px');
			fired_fixed = true;
		}

		if (border_trigger >= (page_4 + 20) && fired_4 === false ) {
			services_swiper.slideTo(4);
			fired_4 = true;
		}

		if (border_trigger >= (page_5 + 20) && fired_5 === false ) {
			services_swiper.slideTo(5);
			fired_5 = true;
		}

		if (border_trigger >= (page_6 + 20) && fired_6 === false ) {
			services_swiper.slideTo(6);
			fired_6 = true;
		}

		if (border_trigger >= (page_7 + 20) && fired_7 === false ) {
			services_swiper.slideTo(7);
			fired_7 = true;
		}

		if (border_trigger >= (page_8 + 20) && fired_fixed_down === false) {
			services_swiper_container.removeClass('_fixed').addClass('_fixed-bottom').css('top', 'auto');
			fired_fixed_down = true;
		}

		if (border_trigger >= (page_8 + 20) && fired_8 === false ) {
			services_swiper.slideTo(8);
			fired_8 = true;
		}
	}

	this.oldScroll = this.scrollY;
};

var raf = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame;
var $window = $(window);
var lastScrollTop = $window.scrollTop();

if (raf) {
	loop();
}

function loop() {
	var scrollTop = $window.scrollTop();

	if (lastScrollTop === scrollTop) {
		raf(loop);
		return;
	} else {
		lastScrollTop = scrollTop;
		// fire scroll function if scrolls vertically
		scroll();
		raf(loop);
	}
}