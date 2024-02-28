$(function(){

	$('.jejutab:not(:first)').hide();	
	
	$('.jejutab01').show(function(){
		$('.jejutab01').addClass('.jejutabclick');
	}) 
	
	$('.jejutab01').hover(function(){
		$('.jejutab01').addClass('.jejutabclick');
		$('.jejumap').attr('src',$('.jejumap').attr('src').replace(/map_\d\d\.png/g,'map_01.png'));
		$('.jeju_tablink:not(.jejutab01)').removeClass('.jejutabclick');
		$('#jeju1').show(0);
		$('#jeju2').hide(0);
		$('#jeju3').hide(0);
		$('#jeju4').hide(0);
	}) 
	
	$('.jejutab02').hover(function(){
		$('.jejutab02').addClass('.jejutabclick');
		$('.jejumap').attr('src',$('.jejumap').attr('src').replace(/map_\d\d\.png/g,'map_04.png'));
		$('.jeju_tablink:not(.jejutab02)').removeClass('.jejutabclick');
		$('#jeju2').show(0);
		$('#jeju1').hide(0);
		$('#jeju3').hide(0);
		$('#jeju4').hide(0);
	}) 

	$('.jejutab03').hover(function(){
		$('.jejutab03').addClass('.jejutabclick');
		$('.jejumap').attr('src',$('.jejumap').attr('src').replace(/map_\d\d\.png/g,'map_03.png'));
		$('.jeju_tablink:not(.jejutab03)').removeClass('.jejutabclick');
		$('#jeju3').show(0);
		$('#jeju1').hide(0);
		$('#jeju2').hide(0);
		$('#jeju4').hide(0);
	})

	$('.jejutab04').hover(function(){
		$('.jejutab04').addClass('.jejutabclick');
		$('.jejumap').attr('src',$('.jejumap').attr('src').replace(/map_\d\d\.png/g,'map_02.png'));
		$('.jeju_tablink:not(.jejutab04)').removeClass('.jejutabclick');
		$('#jeju4').show(0);
		$('#jeju1').hide(0);
		$('#jeju2').hide(0);
		$('#jeju3').hide(0);
	})
	

	
});