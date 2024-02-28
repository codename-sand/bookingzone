$(function(){

	$('.tabcontent1:not(:first)').hide();	
	
	$('.area01').show(function(){
		$('.area01').addClass('tour_tabclick');
	}) 
	
	$('.area01').click(function(){
		$('.area01').addClass('tour_tabclick');
		$('.tour_tab:not(.area01)').removeClass('tour_tabclick');
		$('#Gyeonggi').show(0);
		$('#Gangwon').hide(0);
		$('#Gyeongsang').hide(0);
		$('#Chungcheong').hide(0);
		$('#Jeolla').hide(0);
		$('#Jeju').hide(0);
	}) 
	
	$('.area02').click(function(){
		$('.area02').addClass('tour_tabclick');
		$('.tour_tab:not(.area02)').removeClass('tour_tabclick');
		$('#Gangwon').show(0);
		$('#Gyeonggi').hide(0);
		$('#Gyeongsang').hide(0);
		$('#Chungcheong').hide(0);
		$('#Jeolla').hide(0);
		$('#Jeju').hide(0);
	})

	$('.area03').click(function(){
		$('.area03').addClass('tour_tabclick');
		$('.tour_tab:not(.area03)').removeClass('tour_tabclick');
		$('#Gyeongsang').show(0);
		$('#Gangwon').hide(0);
		$('#Gyeonggi').hide(0);
		$('#Chungcheong').hide(0);
		$('#Jeolla').hide(0);
		$('#Jeju').hide(0);
	})

	$('.area04').click(function(){
		$('.area04').addClass('tour_tabclick');
		$('.tour_tab:not(.area04)').removeClass('tour_tabclick');
		$('#Chungcheong').show(0);
		$('#Gyeonggi').hide(0);
		$('#Gyeongsang ').hide(0);
		$('#Gangwon').hide(0);
		$('#Jeolla').hide(0);
		$('#Jeju').hide(0);
	})

	$('.area05').click(function(){
		$('.area05').addClass('tour_tabclick');
		$('.tour_tab:not(.area05)').removeClass('tour_tabclick');
		$('#Jeolla').show(0);
		$('#Gyeonggi').hide(0);
		$('#Gyeongsang ').hide(0);
		$('#Chungcheong').hide(0);
		$('#Gangwon').hide(0);
		$('#Jeju').hide(0);
	})

	$('.area06').click(function(){
		$('.area06').addClass('tour_tabclick');
		$('.tour_tab:not(.area06)').removeClass('tour_tabclick');
		$('#Jeju').show(0);
		$('#Gyeonggi').hide(0);
		$('#Gyeongsang ').hide(0);
		$('#Chungcheong').hide(0);
		$('#Jeolla').hide(0);
		$('#Gangwon').hide(0);
	})

});