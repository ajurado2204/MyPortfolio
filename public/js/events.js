/**
 * Created by Ale on 5/3/16.
 */
$(document).ready(function(){
  $('.parallax').parallax();

  $(".button-collapse").sideNav({
    menuWidth: 200, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });


  $(".button").on("click", function( e ) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 2000);

  });

});