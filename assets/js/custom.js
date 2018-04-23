$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$(".scroll_top_button").fadeIn();
		} else{
			$(".scroll_top_button").fadeOut();
		}
	});


		$(".scroll_top_button").click(function(){
		$("html, body").animate({scrollTop:0}, 1000)

	})



	$('a[href="#search"]').on('click', function(event) {
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});

	$('#search, #search button.close').on('click keyup', function(event) {
		if(event.target == this || event.target.className == 'close' || event.keycode == 27) {
			$(this).removeClass('open');
		}
	});

});


