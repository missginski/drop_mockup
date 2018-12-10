// portfolio buttons
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

	// for sticky navigation
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
}
, {
  offset:' 140px;'
}
);

// navigation scroll
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	      &&
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
