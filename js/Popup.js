if (!(sessionStorage.getItem('firstVisit') == "1")) {
  sessionStorage.setItem('firstVisit', '1');
  $('.popScroll').css("display", "block");
  $('.pop').each(function () {
      var color = $(this).css('backgroundColor');
      var content = $(this).html();
      $('body').addClass('overlay');
  });
}
$('#close').on('click', function () {
  $('.popScroll').fadeOut(250);
  $('body').removeClass('overlay');
});