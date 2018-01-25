$('.nav-link').click(function(){
	window.scrollTo( 0, 1000 );
})



$('.my-btn').click(function(){
  let value = $(this).attr('data-filter');

  if (value === 'all'){
    $('.filter').show('1000');
  }
  else {
    $(".filter").not('.' + value).hide('3000');
    $('.filter').filter('.' + value).show('3000');
  }
});
