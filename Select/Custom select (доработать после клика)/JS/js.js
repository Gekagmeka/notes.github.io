$('.select-selected').on('click', function(){
	$(this).toggleClass('active');
	$('.select-items').toggleClass('active').toggleClass('hide');
});
