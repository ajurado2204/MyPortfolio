$(window).scroll(function() {
  if($(this).scrollTop() > 50)
  {
    $('.opaque-navbar').addClass('removed-opaque');
  } else {
    $('.opaque-navbar').removeClass('removed-opaque');
  }
});