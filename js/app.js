$(document).ready(function() {
	$( ".header_menu--btn" ).on( "click", function() {
		$(this).toggleClass( "closed" );
		$('.header_menu--mobile').toggleClass( "closed" );
		$('.h1_message').toggleClass("h1_message--color");
		$('.h1').toggleClass("h1--color");
	});

});