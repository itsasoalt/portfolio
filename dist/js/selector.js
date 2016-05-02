$(document).ready(function() {
	$('#sokaire').hide();
	$('#indei').hide();
	$('#naow').hide();

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('#sokaire').show();
			$('#inedi').hide();
			$('#naow').hide();

		} else if ($("select option:selected").val() == 2) {
			$('#sokaire').hide();
			$('#inedi').show();
			$('#naow').hide();

		} else if ($("select option:selected").val() == 3) {
			$('#sokaire').hide();
			$('#inedi').hide();
			$('#naow').show();
		
		} else {
			$('#sokaire').hide();
			$('#inedi').hide();
			$('#naow').hide();
		} 
	})		

});