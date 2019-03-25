var navigation = $('#navigation');

$(document).ready(function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 50 ) {
        // Show back to top button
        navigation.addClass('_floating animate');
    }

    $('.fb-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });
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


