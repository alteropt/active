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

$(document).mouseup(function(event) { 
	var div = $(".header__navigation"); 
	if (!div.is(event.target) && div.has(event.target).length === 0 && !$('.header__burger-menu').is(event.target)) {
		div.removeClass('active');
		$('.header__burger-menu').removeClass('active'); 
	};
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

var headerOffset = $('header').offset().top;
let featuresOffset = $('.features').offset().top - $('header').innerHeight();
let worksOffset = $('.works').offset().top - $('header').innerHeight();
let teamOffset = $('.team').offset().top - $('header').innerHeight();
let bioOffset = $('.bio').offset().top - $('header').innerHeight();

if(headerOffset >= featuresOffset) {
	$('.header__navigation-item').removeClass('active');
	$('.href-1').toggleClass('active');
}
if(headerOffset >= worksOffset) {
	$('.header__navigation-item').removeClass('active');
	$('.href-2').toggleClass('active');
}
if(headerOffset >= teamOffset) {
	$('.header__navigation-item').removeClass('active');
	$('.href-3').toggleClass('active');
}
if(headerOffset >= bioOffset) {
	$('.header__navigation-item').removeClass('active');
	$('.href-4').toggleClass('active');
}
if(headerOffset >= $('.download').offset().top - $('header').innerHeight()) {
	$('.header__navigation-item').removeClass('active');
	$('.href-5').toggleClass('active');
}


$(window).on('scroll', function() {
	let downloadOffset = $('.download').offset().top - $('header').innerHeight();
	if($(window).scrollTop() <= featuresOffset) {
		$('.header__navigation-item').removeClass('active');
	}

	if($(window).scrollTop() > featuresOffset - 1 &&
	$(window).scrollTop() <= worksOffset) {
		$('.header__navigation-item').removeClass('active');
		$('.href-1').toggleClass('active');
	}
	
	if($(window).scrollTop() > worksOffset - 1 &&
	$(window).scrollTop() <= teamOffset) {
		$('.header__navigation-item').removeClass('active');
		$('.href-2').toggleClass('active');
	}

	if($(window).scrollTop() > teamOffset - 1 &&
	$(window).scrollTop() <= bioOffset) {
		$('.header__navigation-item').removeClass('active');
		$('.href-3').toggleClass('active');
	}

	if($(window).scrollTop() > bioOffset - 1 &&
	$(window).scrollTop() <= downloadOffset) {
		$('.header__navigation-item').removeClass('active');
		$('.href-4').toggleClass('active');
	}

	if($(window).scrollTop() > downloadOffset - 1) {
		$('.header__navigation-item').removeClass('active');
		$('.href-5').toggleClass('active');
	}
});

$('.slider').slick({
	arrows: false,
	dots: true
});

window.addEventListener("orientationchange", function() {
    	location.reload();
});
