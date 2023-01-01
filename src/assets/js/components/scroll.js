$('.scroll').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.scroll').addClass('active');
    } else {
        $('.scroll').removeClass('active');
    }
});

