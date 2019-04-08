<!-- Menu Toggle -->

$('.menu_toggle').on('click touch', function() {
    $('body').toggleClass('menu-open');
});

$(document).ready(function(){

    if ( window.innerWidth > 768 ) {
        setMaxHeight();
    }

});

window.addEventListener("resize", function () {
    setMaxHeight();
});

function setMaxHeight() {
    var right_border = $('#right_border');
    var left_border = $('#left_border');
    var left_border_static = $('#left_border_static');
    var footer = $( '#footer' );

    if(right_border.length) {
        var right_border_max = $(document).height() - right_border.offset().top - footer.height();
        right_border.css('max-height', right_border_max + 'px');
    }

    if(left_border.length) {
        var left_border_max = $( document ).height() - left_border.offset().top - footer.height();
        left_border.css('max-height', left_border_max + 'px');
    }

    if(left_border_static.length) {
        var left_border_static_max = $( document ).height() - left_border_static.offset().top - footer.height();
        left_border_static.css('height', left_border_static_max + 'px');
    }
}