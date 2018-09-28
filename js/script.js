$('#burg').click(function() {
	$('#burg').toggleClass('active');
	$('.come-back,.top-submenu').removeClass('active-submenu');
	$('.block-language-switch').removeClass('open');
	return false;
});

$('#burg').click(function (){
	$('#top-menu,.block-callback-small,.block-language-switch-small,.collumn-left-contacts,.block-social').toggleClass("active-is");
});

$('#top-menu > li.licenzya').click(function (){
	if ($(window).width() < '1025') {
		$('ul',this).addClass('active-submenu');
		$('.come-back').addClass('active-submenu');
	}
});

$('#top-menu > li.products').click(function (){
	if ($(window).width() < '1025') {
		$('ul',this).addClass('active-submenu');
		$('.come-back').addClass('active-submenu');
	}
});

$('.come-back').click(function(){
	$('.come-back,.top-submenu').removeClass('active-submenu');
});

$('.block-language-switch').click(function(){
	$(this).toggleClass('open');
});

$('.block-language-switch li').click(function(){
	var setLang = $('.block-language-switch').data('location'),
		dataLangSelect = $(this).data('lang')
	$('.block-language-switch').data('location', dataLangSelect);
	$('.block-language-switch li').removeClass('active');
	$(this).toggleClass('active');
});
