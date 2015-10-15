$(document).ready(function() {

	// validate enter items text box and enter quantityt text box
// use enter to add list items
	
// add item and quantity to todo list
$("#add-todo").click(function(){
		// Item variables
        var textbox_items = document.getElementById('add-item')
        var itemsval = textbox_items.value;
        // Quantity variables
        var textbox_quantity = document.getElementById('add-quantity')
        var quantityval = textbox_quantity.value;
		
		if(!$.trim($('#add-item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="item"></li>').appendTo('.items-list').html(itemsval);

		document.getElementById('add-item').value = '';
		};

		
		if(!$.trim($('#add-quantity').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="quantity"></li>').appendTo('.quantity-list').html(quantityval);

		document.getElementById('add-quantity').value = '';
		};	
			

	// add enter items to items list
	// add enter quantity to quantity list


	});
});

