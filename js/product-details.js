// This file handles the product details functionality

$(document).ready(function() {
    // Get the product ID from the URL
    var productId = getProductIdFromUrl();

    // Make AJAX request to retrieve product details from the backend API
    $.ajax({
        url: "/products/" + productId,
        method: "GET",
        success: function(response) {
            // Display the product details on the page
            var productDetails = response;
            renderProductDetails(productDetails);
        },
        error: function(error) {
            console.log("Error retrieving product details:", error);
            displayErrorMessage();
        }
    });
});

function getProductIdFromUrl() {
    var url = window.location.href;
    var productId = url.substring(url.lastIndexOf("/") + 1);
    return productId;
}

function renderProductDetails(productDetails) {
    // Code to render the product details on the page
    // Example: $("#product-details").text(productDetails);
}

function displayErrorMessage() {
    // Code to display an error message to the user
    // Example: $("#error-message").text("Failed to retrieve product details. Please try again later.");
}
