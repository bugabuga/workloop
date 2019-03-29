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
            $(this).removeClass('chat-expanded')
        } else {
            olark('api.box.expand');
            $(this).addClass('chat-expanded')
        }
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


