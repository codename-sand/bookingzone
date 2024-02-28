// function openTab(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();



// jQuery

$(function(){

	$('.tabcontent:not(:first)').hide();	
	
	$('.tab01').show(function(){
		$('.tab01').addClass('tabclick');
	}) 
	
	$('.tab01').click(function(){
		$('.tab01').addClass('tabclick');
		$('.tablinks:not(.tab01)').removeClass('tabclick');
		$('#Japan').show(0);
		$('#China').hide(0);
		$('#Thailand').hide(0);
		$('#Philippines').hide(0);
	}) 
	
	$('.tab02').click(function(){
		$('.tab02').addClass('tabclick');
		$('.tablinks:not(.tab02)').removeClass('tabclick');
		$('#China').show(0);
		$('#Japan').hide(0);
		$('#Thailand').hide(0);
		$('#Philippines').hide(0);
	}) 

	$('.tab03').click(function(){
		$('.tab03').addClass('tabclick');
		$('.tablinks:not(.tab03)').removeClass('tabclick');
		$('#Thailand').show(0);
		$('#China').hide(0);
		$('#Japan').hide(0);
		$('#Philippines').hide(0);
	})

	$('.tab04').click(function(){
		$('.tab04').addClass('tabclick');
		$('.tablinks:not(.tab04)').removeClass('tabclick');
		$('#Philippines').show(0);
		$('#China').hide(0);
		$('#Japan').hide(0);
		$('#Thailand').hide(0);
	})
	

	
});



