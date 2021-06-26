$(function() {
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
		var blockSelector = $(this).data('scroll');
		var blockOffset = $(blockSelector).offset().top;
		var headerOffset = $('header').innerHeight();

		$('html, body').animate({
			scrollTop: blockOffset - headerOffset,
		}, 500);

		$(this).addClass('active');
	});

});




