$('.my-btn').click(function() {
  let value = $(this).attr('data-filter');

  if (value === 'all'){
    $('.filter').show('1000');
  }
  else {
    $(".filter").not('.' + value).hide('3000');
    $('.filter').filter('.' + value).show('3000');
  }
});

// $('.nav-link').click(function(){
// 	window.scrollTo( 0, 1000 );
// })

// $(window).scroll(function() {
//   if ( $(this).scrollTop() > 10 ) {
//     $('.navbar').addClass('bg-light');
//     $('.navbar').addClass('navbar-light');
//     $('.navbar').removeClass('navbar-dark');
//   }
//   else ('.navbar').removeClass('bg-dark');
// })

$('.features').waypoint(function(direction) {
  if (direction === 'down') {
    $('nav').addClass('sticky');
    $('nav').addClass('navbar-light');
    $('nav').removeClass('navbar-dark');
  } else {
    $('nav').removeClass('sticky');
    $('nav').removeClass('navbar-light');
    $('nav').addClass('navbar-dark');
  }
})
