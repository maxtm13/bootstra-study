$('document').ready(function () {
    console.log("Ready");
    $('#contact form').on('submit', function (e) {
        e.preventDefault();
        console.log($(e.currentTarget));
        let $form = $(e.currentTarget),
            $mail = $form.find('#contact-email'),
            $button = $form.find('button[type=submit]');
        if ($mail.val().indexOf('@') == -1) {
            let vaca = $mail.closest('.form-group')
            vaca.addClass('has-error');
        } else {
            $form.find('.form-group').addClass('has-success').removeClass('has-error');
            $button.attr('disabled', 'disabled');
            $button.after('<span>Сообщение отправлено. Мы свяжемся с вами в ближайшее время</span>')
        }
    })
    $('#sign-btn').on('click', function (e) {
        $(e.currentTarget).closest('ul').hide({
            duration: 800,

        });
        $('#signin').fadeIn('fast');
    })
});