$("form").submit(function() { //Change
    var th = $(this);
    var float = $('.js-message-sent');

    $.ajax({
        type: "POST",
        url: "/wp-content/themes/workloop/mail.php", //Change
        data: th.serialize()
    }).done(function() {
        float.removeClass('hide').addClass('show');
        setTimeout(function() {
            // Done Functions
            float.addClass('hide').removeClass('show');
            th.trigger("reset");
        }, 3000);
    });
    return false;
});