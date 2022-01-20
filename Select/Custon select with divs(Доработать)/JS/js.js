$('.trigger').on('click', function(){
	$(this).toggleClass('active');
	$('.dropdown-list').toggleClass('hidden');
});

$('.dropdown-item a').on('click', function(){
	$('.dropdown-list').addClass('hidden');
	$('.trigger').removeClass('active');
});