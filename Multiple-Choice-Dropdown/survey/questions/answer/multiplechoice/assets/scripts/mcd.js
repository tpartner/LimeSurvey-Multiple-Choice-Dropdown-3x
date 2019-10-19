

function initMCD(sgq) {
	
	var sgqArr = sgq.split('X');
	var qID = sgqArr[2];
	var thisQuestion = $('#question'+qID);
	
	// Add options to the select element
	$('.checkbox-item input:checkbox', thisQuestion).each(function(i) {
		var thisItem = $(this).closest('.checkbox-item');
		var thisID = $(this).attr('id');
		var thisLabel = $('label:eq(0)', thisItem).text();
		var checkedText = '';
		if($(this).is(':checked')) {
			checkedText = ' selected';
		}
		$('.mcd-select', thisQuestion).append('<option value="'+thisID+'"'+checkedText+'>'+thisLabel+'</option>');
	});
	
	// Initiate select2
	$('.mcd-select', thisQuestion).select2();
	
	$('.mcd-select', thisQuestion).on('change', function(e) {
		var checkedItems = $(this).val();
		
		$('.checkbox-item input:checkbox', thisQuestion).prop('checked', false).trigger('change');
		$.each(checkedItems, function(i, val) {
			$('input:checkbox#'+val+'', thisQuestion).prop('checked', true).trigger('change');
		});	
	});
	
}

$(document).on('ready pjax:scriptcomplete',function(){
});