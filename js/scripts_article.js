var navigation = $('#navigation');

$(document).ready(function() {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition >= 50 && window.innerWidth > 768 ) {
        // Show back to top button
        navigation.addClass('_floating animate');
    }

    $('.fb-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

    updateThumb();
});

window.addEventListener("resize", function () {
    updateThumb();
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

function linkedin_share(url) {
    newwindow=window.open(url,'Share on LinkedIn','height=500,width=400');
    if (window.focus) {newwindow.focus()}
    return false;
}

function updateThumb() {
    var thumb_width = $('.article-thumbnail').width();
    var thumb_height = $('.article-thumbnail').height();

    var img_width = $('.article-thumbnail img').width();
    var img_height = $('.article-thumbnail img').height();

    var thumb = $('.article-thumbnail img');

    if ( img_width / thumb_width < img_height / thumb_height) {
        thumb.css({
            'width': img_width / (img_width / thumb_width)  + 'px',
            'height': img_height / (img_width / thumb_width) + 'px',
            'top': '-' + ((img_height / (img_width / thumb_width)) - thumb_height) / 2 + 'px'
        });
    } else {
        thumb.css({
            'width': img_width / (img_height / thumb_height)  + 'px',
            'height': img_height / (img_height / thumb_height) + 'px',
            'left': '-' + ( (img_width / (img_height / thumb_height)) - thumb_width ) / 2 + 'px'
        });
    }
}