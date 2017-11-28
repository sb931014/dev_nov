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
	$('.owl-carousel').owlCarousel({
		items:3,
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

});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});


