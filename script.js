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

// $('.navbar li.dropdown').hover(
//     function(){
//         $(this).addClass('open').find('ul').stop(true,true).hide().slideDown('fast');
//     },
//     function(){
//         $(this).removeClass('open').find('ul').stop(true,true).slideUp('fast');
//     }
// );
// $('.navbar li.dropdown li').unbind('mouseover').unbind('mouseout');
