$(window).resize(function() {
var medida = $('.section_container--blockquote').position();

	if ($(window).width()>=1024) {
		$('.contact_img--controler').position(medida.top);
	}
});