//$( document ).ready(function() {
//   Handler for .ready() called.
//});
//위에것과 같은 코드지만 위에것이 더 옛날것

$(function() {
  // Handler for .ready() called.
  new WOW().init()
});

/*

*/
$(function(){
	$('#team-members').owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true
	});

	$('#customers-testimonials').owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true
	});

	$('#clients-list').owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true
	});

	$('#work').magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});


	$('.gallery').each(function(){
		$(this).magnificPopup({
			delegate:'a',
			type:'image',
			gallery:{
				enabled:true
			}
		});
	});

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

});

//https://github.com/ciromattia/jquery.counterup
//http://imakewebthings.com/waypoints/

