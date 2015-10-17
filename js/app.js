$(document).ready(function() {

	// validate enter items text box and enter quantityt text box
// use enter to add list items
	
// add item and quantity to todo list
$("#add-todo").click(function(){
		
		// Global Variables
        var textbox_items = document.getElementById('add-item')
        var itemsval = textbox_items.value;
        var checkBox = '<span class="check">&#10004</span>'
        var xMark = '<span class="delete">&#10008</span>'
        // Quantity variables
        
		// Adds items to list after user enters them in text box
		if(!$.trim($('#add-item').val())) {
			alert('Please enter text to add to the list');
		} else {
			$('<li class="item"></li>').appendTo('.items-list').html(checkBox + itemsval + xMark);

		document.getElementById('add-item').value = '';
		};

	});
});

// When user clicks delete item is removed from list
$(document).on("click", ".delete", function(){
	$(this).closest('li').fadeOut(300);
});

// Allows user to check off items
$(document).on("click", ".check", function(){
	$(this).closest('li').toggleClass('complete')
});


// When delete is clixked
// remove item from list


// When check is clicked
// Put line through
// make see through



