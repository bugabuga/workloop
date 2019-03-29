var navigation = $('#navigation');

$(document).ready(function() {
	// This is required for AJAX to work on our page
	var ajaxurl = 'http://connex.thebuga.com/wp-admin/admin-ajax.php';

	function cvf_load_all_posts(page){
		// Start the transition
		$(".cvf_pag_loading").fadeIn().css('background','#ccc');

		// Data to receive from our server
		// the value in 'action' is the key that will be identified by the 'wp_ajax_' hook
		var data = {
			page: page,
			action: "demo-pagination-load-posts"
		};

		// Send the data
		$.post(ajaxurl, data, function(response) {
			// If successful Append the data into our html container
			$(".cvf_universal_container").html(response);
			// End the transition
			$(".cvf_pag_loading").css({'background':'none', 'transition':'all 1s ease-out'});
		});
	}

	// Load page 1 as the default
	cvf_load_all_posts(1);

	// Handle the clicks
	$('.cvf_universal_container .cvf-universal-pagination li.active').on('click',function(){
		console.log('click');
		var page = $(this).attr('p');
		cvf_load_all_posts(page);
	});

});

$(document).ready(function() {
	var scrollPosition = $(window).scrollTop();

	if (scrollPosition >= 50 && window.innerWidth > 768 ) {
		// Show back to top button
		navigation.addClass('_floating animate');
	}
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

	if (scroll_trigger >= 100) {

		var right_bar_height = (((scrollPosition - 100) / window_ratio) / 1.5) * 1.66 / speed_ratio;
		var right_bar_height_boost = (((scrollPosition - (600 * window_ratio)) / window_ratio) / 2) * 1.66 / speed_ratio;

		if (scroll_trigger > 600) {
			rightBar(right_bar_height + right_bar_height_boost);
		} else {
			rightBar(right_bar_height);
		}
	}

});


