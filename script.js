$(document).ready(function() {

$('meta').each(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle-header');
  });

  $(window).on('scroll load', function(){

    $('menu').toggleClass('fa-times');
    $('header').toggleClass('toggle-header');

  });




});