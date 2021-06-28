$(window).on('scroll', function() {
	$('header').addClass('active');
	if ($(this).scrollTop() == 0) {
		$('header').removeClass('active');
	}
});
if ($('header').offset().top > 0) {
	$('.header').toggleClass('active');
}


$('.header__burger-menu').on('click', function() {
	$('.header__burger-menu').toggleClass('active');
	$('.header__navigation').toggleClass('active');
});

$('[data-scroll]').on('click', function(event) {
	$('[data-scroll]').removeClass('active');
	event.preventDefault()

	var blockSelector = $(this).data('scroll');
	var blockOffset = $(blockSelector).offset().top;
	var headerOffset = $('header').innerHeight();

	$('html, body').animate({
		scrollTop: blockOffset - headerOffset,
	}, 300);

	$(this).addClass('active');
});

$('.header__logo').on('click', function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 300);
	$('.header__navigation-item').removeClass('active');
})

$(window).on('scroll', function() {
	if($(window).scrollTop() <= $('.features').offset().top - $('header').innerHeight()) {
		$('.header__navigation-item').removeClass('active');
	}

	if($(window).scrollTop() > $('.features').offset().top - $('header').innerHeight() - 10 &&
	$(window).scrollTop() <= $('.works').offset().top - $('header').innerHeight()) {
		$('.header__navigation-item').removeClass('active');
		$('.href-1').toggleClass('active');
	}
	
	if($(window).scrollTop() > $('.works').offset().top - $('header').innerHeight() - 10 &&
	$(window).scrollTop() <= $('.team').offset().top - $('header').innerHeight()) {
		$('.header__navigation-item').removeClass('active');
		$('.href-2').toggleClass('active');
	}

	if($(window).scrollTop() > $('.team').offset().top - $('header').innerHeight() - 10 &&
	$(window).scrollTop() <= $('.bio').offset().top - $('header').innerHeight()) {
		$('.header__navigation-item').removeClass('active');
		$('.href-3').toggleClass('active');
	}

	if($(window).scrollTop() > $('.bio').offset().top - $('header').innerHeight() - 10 &&
	$(window).scrollTop() <= $('.download').offset().top - $('header').innerHeight()) {
		$('.header__navigation-item').removeClass('active');
		$('.href-4').toggleClass('active');
	}

	if($(window).scrollTop() > $('.download').offset().top - $('header').innerHeight() - 10) {
		$('.header__navigation-item').removeClass('active');
		$('.href-5').toggleClass('active');
	}
});

$('.slider').slick({
	arrows: false,
	dots: true
});

var slideNumber = $('.bio__slide.slick-active').attr('data-slick-index');
$('.slick-dots li button').removeClass('active');
$(`#slick-slide-control0${slideNumber}`).addClass('active');

$('.bio__slider').mousemove(function() {
	var slideNumber = $('.bio__slide.slick-active').attr('data-slick-index');
	$('.slick-dots li button').removeClass('active');
	$(`#slick-slide-control0${slideNumber}`).addClass('active');	
});


$('.bio__slider').on('click', function() {
	var slideNumber = $('.bio__slide.slick-active').attr('data-slick-index');
	$('.slick-dots li button').removeClass('active');
	$(`#slick-slide-control0${slideNumber}`).addClass('active');	
});


$('.bio__slider').on('touchmove', function() {
	var slideNumber = $('.bio__slide.slick-active').attr('data-slick-index');
	$('.slick-dots li button').removeClass('active');
	$(`#slick-slide-control0${slideNumber}`).addClass('active');	
});

$('.bio__slider').keydown(function() {
	var slideNumber = $('.bio__slide.slick-active').attr('data-slick-index');
	$('.slick-dots li button').removeClass('active');
	$(`#slick-slide-control0${slideNumber}`).addClass('active');	
});









