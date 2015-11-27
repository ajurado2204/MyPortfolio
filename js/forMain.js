$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
  {
    $('.opaque-navbar').addClass('removed-opaque');
  } else {
    $('.opaque-navbar').removeClass('removed-opaque');

  }
});