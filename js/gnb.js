$(function(){

  $('.click').toggle(function(){
    $('.navi_sub').show(0);
    $('.nav_text1').addClass('nav_text2');
    $('.nav_text1 img').attr('src',$('.nav_text1 img').attr('src').replace('icon_01.png','icon_03.png'));
  },function(){
    $('.navi_sub').hide(0);
    $('.nav_text1').removeClass('nav_text2');
    $('.nav_text1 img').attr('src',$('.nav_text1 img').attr('src').replace('icon_03.png','icon_01.png'));
  })
  
});



