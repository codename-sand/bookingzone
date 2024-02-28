$(function(){

	$('.tabcontent1:not(:first)').hide();	
	
	$('.m_tab01').show(function(){
		$('.m_tab01').addClass('tour_tabclick');
	}) 
	
	$('.m_tab01').click(function(){
		$('.m_tab01').addClass('tour_tabclick');
		$('.tour_tab:not(.m_tab01)').removeClass('tour_tabclick');
		$('#korea').show(0);
		$('#foreign').hide(0);
	}) 
	
	$('.m_tab02').click(function(){
		$('.m_tab02').addClass('tour_tabclick');
		$('.tour_tab:not(.m_tab02)').removeClass('tour_tabclick');
		$('#foreign').show(0);
		$('#korea').hide(0);
	}) 

});