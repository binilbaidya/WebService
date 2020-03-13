$('.info').hide();
$('.info2').hide();
$('#main').click(function(){
  $('#side').toggle(1000);
  $('.info').toggle(1000);
});
$('#side').click(function(){
  $('#main').toggle(1000);
  $('.info2').toggle(1000);
  if ($(this).hasClass('padd')) {
    $(this).removeClass('padd');
  }
  else {
    $(this).addClass('padd');
  }
});
