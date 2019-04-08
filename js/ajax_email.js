$('.contact-submit').on('click', function(e){
    var response = grecaptcha.getResponse();

    if (response.length == 0) {
        $('.captcha-wrap').addClass('_error');
        e.preventDefault();

    } else {
        $('.captcha-wrap').removeClass('_error');
        //E-mail Ajax Send
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
                    grecaptcha.reset();
                }, 3000);
            });
            return false;
        });
    }
});