$(function(){

	$('.recommend_slide').bxSlider({
		speed: 500,
		pause: 3000,
		auto: true,
		moveSlides: 5,
		minSlides: 5,
		maxSlides: 5,
		slideWidth: 165,
		slideMargin: 60,
		autoHover: false,
		pager: false,
		controls: true,
	})

	$('.table_slide').bxSlider({
		auto: false,
		moveSlides: 1,
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 398,
		autoHover: false,
		pager: false,
		controls: true,
	})


	$('.thumbslide').bxSlider({
  		pagerCustom: '#bx-pager'
	})

	$('.modal1').hide();

	$('.lounge').click(function(){
		$('.modal1').show(0);
	})

    $("#hide").click(function(){
        $(".modal1").hide();
    })

    $('.modal2').hide();

	$('.resort').click(function(){
		$('.modal2').show(0);
	})

    $("#hide2").click(function(){
        $(".modal2").hide();
    })


    $('.modal3').hide();

	$('.food').click(function(){
		$('.modal3').show(0);
	})

    $("#hide3").click(function(){
        $(".modal3").hide();
    })

	$('.accordian_title img').toggle(function(){
		$(this).parent().next().show();
	},function(){
		$(this).parent().next().hide();
	})


	$('.top_content').hide();

	$('.button').toggle(function(){
    $('.top_content').show(0);
    $('.button img').attr('src',$('.button img').attr('src').replace('icon_75.png','icon_77.png'));
  },function(){
    $('.top_content').hide(0);
    $('.button img').attr('src',$('.button img').attr('src').replace('icon_77.png','icon_75.png'));
  })


	// tab
	$(function(){

	$('.detail_tab_content:not(:first)').hide();	
	
	$('.d_tab01').show(function(){
		$('.d_tab01').addClass('detail_tabclick');
	}) 
	
	$('.d_tab01').click(function(){
		$('.d_tab01').addClass('detail_tabclick');
		$('.detail_tab:not(.d_tab01)').removeClass('detail_tabclick');
		$('#lounge').show(0);
		$('#resort').hide(0);
		$('#food').hide(0);
	}) 
	
	$('.d_tab02').click(function(){
		$('.d_tab02').addClass('detail_tabclick');
		$('.detail_tab:not(.d_tab02)').removeClass('detail_tabclick');
		$('#resort').show(0);
		$('#lounge').hide(0);
		$('#food').hide(0);
	})

	$('.d_tab03').click(function(){
		$('.d_tab03').addClass('detail_tabclick');
		$('.detail_tab:not(.d_tab03)').removeClass('detail_tabclick');
		$('#food').show(0);
		$('#lounge').hide(0);
		$('#resort').hide(0);
	})
	

});
});



 