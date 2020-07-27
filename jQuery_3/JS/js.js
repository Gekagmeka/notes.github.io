$('.tab__title').click(function(){
	if($(this).parent('.tab').hasClass('active')) {
		$(this).parent('.tab').removeClass('active');
	} else{
		$('.tab').removeClass('active');
		$(this).parent('.tab').addClass('active');
	}
});
