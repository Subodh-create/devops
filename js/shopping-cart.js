// This file handles the shopping cart functionality

$(document).ready(function() {
    // Make AJAX request to retrieve cart items from the backend API
    $.ajax({
        url: "/cart/items",
        method: "GET",
        success: function(response) {
            // Display the cart items on the page
            var cartItems = response;
            renderCartItems(cartItems); // Call the renderCartItems function to render the cart items on the page
        },
        error: function(error) {
            console.log("Error retrieving cart items:", error);
        }
    });
});

function renderCartItems(cartItems) {
    // Code to render the cart items on the page
    // Implement the logic to display the cart items on the page
}

function addItemToCart(item) {
    // Make AJAX request to add item to the cart in the backend API
    $.ajax({
        url: "/cart/items",
        method: "POST",
        data: JSON.stringify(item),
        contentType: "application/json",
        success: function(response) {
            // Handle success response
            console.log("Item added to cart successfully");
        },
        error: function(error) {
            console.log("Error adding item to cart:", error);
        }
    });
}

function removeItemFromCart(itemId) {
    // Make AJAX request to remove item from the cart in the backend API
    $.ajax({
        url: "/cart/items",
        method: "DELETE",
        data: { itemId: itemId },
        success: function(response) {
            // Handle success response
            console.log("Item removed from cart successfully");
        },
        error: function(error) {
            console.log("Error removing item from cart:", error);
        }
    });
}
