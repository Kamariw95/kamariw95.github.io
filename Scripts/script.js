$(function() {
  $('.ui.fixed.button').click( function(){
    $('.ui.sidebar').sidebar('toggle');
  });

  $('.item').click(function(){
    $('.ui.sidebar').sidebar('toggle');
  });
});
