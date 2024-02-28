$(function(){

	$('.ac_tab:not(:first)').hide();	
	
	$('.id_bt').show(function(){
		$('.id_bt').addClass('ac_tabclick');
	}) 
	
	$('.id_bt').click(function(){
		$('.id_bt').addClass('ac_tabclick');
		$('.account:not(.id_bt)').removeClass('ac_tabclick');
		$('#id').show(0);
		$('#pw').hide(0);
	}) 
	
	$('.pw_bt').click(function(){
		$('.pw_bt').addClass('ac_tabclick');
		$('.account:not(.pw_bt)').removeClass('ac_tabclick');
		$('#pw').show(0);
		$('#id').hide(0);
	}) 
});
