<!-- Initialize Swiper -->
var services_swiper = new Swiper('#services_swiper', {
	spaceBetween: 30,
	effect: 'fade',
	speed: 100,
	simulateTouch: false,
	pagination: {
		el: '#services_swiper_pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"><span class="dots"></span><span class="bullet bullet-' + (index + 1) + '"></span></span>';
		}
	},
});

if ( $('.slider_js').is(':visible')) {
	<!-- Initialize Swiper -->
	var services_mobile_swiper = new Swiper('#services_mobile_swiper', {
		spaceBetween: 30,
		effect: 'fade',
		speed: 100,
		pagination: {
			el: '#services_mobile_swiper_pagination',
			dynamicBullets: true,
		},
	});
}



<!-- Initialize Swiper -->
var channels_swiper = new Swiper('#channels_swiper', {
	spaceBetween: 30,
	effect: 'fade',
	speed: 100,
	breakpointsInverse: true,
	breakpoints: {
		768: {
			pagination: {
				el: '#channels_swiper_pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + ' bullet bullet-' + (index + 1) + '"><i class="icon"></i></span>';
				}
			}
		},
		320: {
			pagination: {
				el: '#channels_swiper_pagination',
				clickable: true,
				dynamicBullets: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + ' bullet bullet-' + (index + 1) + '"><i class="icon"></i></span>';
				}
			}
		}
	},
	
});


var channels_odd = $("#channels_swiper_pagination .bullet-1, #channels_swiper_pagination .bullet-3, #channels_swiper_pagination .bullet-5");

function channelsMove(odd) {
	channels_odd.css('transform', 'translate(0,' + odd + 'em)');
}

var navigation = $('#navigation');

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 && window.innerWidth > 768 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}

	if (window.innerWidth > 768) {
		services_swiper.slideTo(4);
	}
});

function rightBar(height) {
	$('#right_border').css('height', height / 14 + 'em');
}

function leftBar (height) {
	$('#left_border').css('height', height / 14 + 'em');
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

	setTimeout(function(){
		$('html, body').stop().animate({
			scrollTop: ($('#services_swiper_pagination').offset().top - (140 * height_ratio))
		}, 300);
	}, 300);

	click = true;

	setTimeout(function(){
		click = false;
	}, 1000);

	fired = false;
	fired_1 = false;
	fired_2 = false;
	fired_3 = false;
	fired_4 = false;
	fired_up = false;
	fired_up_1 = false;
	fired_up_2 = false;
	fired_up_3 = false;
	fired_up_4 = false;
	fired_bottom = false;
	fired_border = false;
});

var fired = false;
var fired_1 = false;
var fired_2 = false;
var fired_3 = false;
var fired_4 = false;
var fired_up = false;
var fired_up_1 = false;
var fired_up_2 = false;
var fired_up_3 = false;
var fired_up_4 = false;
var fired_bottom = false;
var fired_border = false;
var channels_trigger = false;

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
	var border_trigger = $('#right_border .trigger')[0].getBoundingClientRect().top;
	var right_border = $('#right_border');

	if (scrollPosition >= 50) {
		// Show back to top button
		navigation.addClass('_floating animate');
	} else {
		navigation.removeClass('_floating');
	}

	if (scroll_trigger >= 20) {

		var right_bar_height = (((scrollPosition - 200) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (1000 * window_ratio)) / window_ratio) / 1.1) * 1.66 / speed_ratio;

		if (click === false) {

			if (scroll_trigger > 1000 && scroll_trigger < 1450) {
				rightBar(right_bar_height + right_bar_height_boost);
			} else if (scroll_trigger < 1450) {
				rightBar(right_bar_height);
			}
		}
	}

	if (scroll_trigger >= 1400) {

		var left_bar_height = (((scrollPosition - 1450) / window_ratio) / 1.2) * 1.66 / speed_ratio;
		var left_bar_height_boost = (((scrollPosition - (1990 * window_ratio)) / window_ratio) / 2 ) * 1.66 / speed_ratio; // 20

		if (scroll_trigger < 1990) {
			leftBar(left_bar_height);
		} else {
			leftBar(left_bar_height + left_bar_height_boost);
		}
	}

	if (scroll_trigger >= 1650) {
		var channels_movement = - (scroll_trigger - 1650) / (24 * 2);

		if (channels_movement < -200/24) {
			channels_trigger = true;
			channelsMove(-200/24);
		}

		if (channels_trigger === false) {
			channelsMove(channels_movement);
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
		fired_border = false;

		if (click === false) {

			if (right_bar_height < parseInt(right_border.css('min-height'),10)) {
				right_border.css('min-height', '0');
			}
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

		if (border_trigger < (page_1 + 30) && services_swiper.activeIndex !== 0 ) {
			services_swiper.slideTo(0);
		}

		if (border_trigger < (page_1 - 400)) {
			services_swiper.slideTo(4);
		}

		if (scroll_trigger < 1450) {
			fired_bottom = false;
			channels_trigger = false;

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

		if (border_trigger >= (page_4 + 20) && fired_4 === false ) {
			services_swiper.slideTo(4);
			fired_4 = true;
		}

		if (scroll_trigger >= 1450 && fired_bottom === false) {
			right_border.addClass('_full _animate-down');
			fired_bottom = true;
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

if (raf && window.innerWidth > 768) {
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