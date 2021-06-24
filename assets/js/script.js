$(window).on('scroll', function() {
	$('header').addClass('active');
	if ($(this).scrollTop() == 0) {
		$('header').removeClass('active');
	}
});




