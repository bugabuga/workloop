var navigation = $('#navigation');

$(document).ready(function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 50 ) {
        // Show back to top button
        navigation.addClass('_floating animate');
    }
});

$(window).on('scroll', function(){
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 50) {
        // Show back to top button
        navigation.addClass('_floating animate');
    } else {
        navigation.removeClass('_floating');
    }
});


