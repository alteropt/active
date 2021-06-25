$(window).on('scroll', function() {
	$('header').addClass('active');
	if ($(this).scrollTop() == 0) {
		$('header').removeClass('active');
	}
});


$('.header__burger-menu').on('click', function() {
	$('.header__burger-menu').toggleClass('active');
	$('.header__navigation').toggleClass('active');
});




