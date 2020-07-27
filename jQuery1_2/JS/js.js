$('.tab__title').on('click', function(){
	$(this).toggleClass('active').next().slideToggle();
	$('.tab__title').not(this).removeClass('active').next().slideUp();
});
