$(function(){

	$('.tabcontent1:not(:first)').hide();	
	
	$('.foreign01').show(function(){
		$('.foreign01').addClass('tour_tabclick');
	}) 
	
	$('.foreign01').click(function(){
		$('.foreign01').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign01)').removeClass('tour_tabclick');
		$('#japan').show(0);
		$('#china').hide(0);
		$('#thailand').hide(0);
		$('#philippines').hide(0);
		$('#malaysia').hide(0);
		$('#indonesia').hide(0);
	}) 
	
	$('.foreign02').click(function(){
		$('.foreign02').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign02)').removeClass('tour_tabclick');
		$('#china').show(0);
		$('#japan').hide(0);
		$('#thailand').hide(0);
		$('#philippines').hide(0);
		$('#malaysia').hide(0);
		$('#indonesia').hide(0);
	})

	$('.foreign03').click(function(){
		$('.foreign03').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign03)').removeClass('tour_tabclick');
		$('#thailand').show(0);
		$('#japan').hide(0);
		$('#china').hide(0);
		$('#philippines').hide(0);
		$('#malaysia').hide(0);
		$('#indonesia').hide(0);
	})

	$('.foreign04').click(function(){
		$('.foreign04').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign04)').removeClass('tour_tabclick');
		$('#philippines').show(0);
		$('#japan').hide(0);
		$('#china').hide(0);
		$('#thailand').hide(0);
		$('#malaysia').hide(0);
		$('#indonesia').hide(0);
	})

	$('.foreign05').click(function(){
		$('.foreign05').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign05)').removeClass('tour_tabclick');
		$('#malaysia').show(0);
		$('#japan').hide(0);
		$('#china').hide(0);
		$('#thailand').hide(0);
		$('#philippines').hide(0);
		$('#indonesia').hide(0);
	})

	$('.foreign06').click(function(){
		$('.foreign06').addClass('tour_tabclick');
		$('.tour_tab:not(.foreign06)').removeClass('tour_tabclick');
		$('#indonesia').show(0);
		$('#japan').hide(0);
		$('#china').hide(0);
		$('#thailand').hide(0);
		$('#philippines').hide(0);
		$('#malaysia').hide(0);
	})

});