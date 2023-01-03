/*  //= components/script2.js - это для подключение дргуих файлов js  */

$(function(){

    $('.bike-slider, .slider__items').slick({
        fade: true,
        speed: 2000,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

});
$(document).ready(function(){
	$(".menu, .bike__column").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
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