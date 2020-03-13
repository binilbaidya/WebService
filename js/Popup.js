$(document).ready(function() {
  if(localStorage.getItem('popState') != 'shown'){
    $('.pop').each(function(){
      var color = $(this).css('backgroundColor');
      var content = $(this).html();
      $('body').addClass('overlay');
    });
    localStorage.setItem('popState','shown')
  }
  $('#close').on('click', function() {
    $('.popScroll').fadeOut(250);
    $('body').removeClass('overlay');
  });
  if(localStorage.getItem('popState') = 'shown'){
    $('.popScroll').fadeOut(5);
  }
});