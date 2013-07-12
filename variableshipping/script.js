$(document).ready(function(){
	$('#carrier_form p:last').after('<p style="display:none;"><label for="variable_shipping_price">Shipping Price: </label><input class="ac_input" type="text" name="variable_shipping_price" id="variable_shipping_price">&nbsp;<a href="#" class="button" id="variable_shipping_price_set"><span>Update</span></p>');

	var display_variable_price_field = function(e) {
		if ($('#delivery_option').val() == variableshipping_carrier_id + ',') {
			$('#shipping_price').parent('p').hide();
			$('#variable_shipping_price').val($('#shipping_price').text());
			$('#variable_shipping_price').parent('p').show();
			$('#free_shipping').parent('p').hide();
		} else {
			$('#shipping_price').parent('p').show();
			$('#variable_shipping_price').parent('p').hide();
			$('#free_shipping').parent('p').show();
		}
	};

	$('#delivery_option').bind('change', display_variable_price_field);

	setTimeout(function() {
		if ($('#carriers_part:visible').length)
			return display_variable_price_field();
		setTimeout(arguments.callee, 300)
	}, 300);

	$('#variable_shipping_price_set').bind('click', function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: variableshipping_ajax_url,
			dataType: 'json',
			data: {
				'ajax': true,
				'token': variableshipping_token,
				'id_cart': id_cart,
				'id_customer': id_customer,
				'value': $('#variable_shipping_price').val(),
			},
			success: function(res) {
				updateDeliveryOption();
			},
		});
		return false;
	});
});
