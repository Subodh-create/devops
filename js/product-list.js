// This file handles the product listing functionality

$(document).ready(function() {
    // Make AJAX request to retrieve product list from the backend API
    $.ajax({
        url: "/products",
        method: "GET",
        success: function(response) {
            // Display the product list on the page
            var productList = response;
            renderProductList(productList); // Call the renderProductList function to render the product list on the page
        },
        error: function(error) {
            console.log("Error retrieving product list:", error);
        }
    });
});

function renderProductList(productList) {
    // Code to render the product list on the page
    var productListContainer = $("#product-list"); // Assuming there is a container element with id "product-list" to display the product list
    
    // Clear the existing content in the container
    productListContainer.empty();
    
    // Iterate over each product in the list and create HTML elements to display the product information
    productList.forEach(function(product) {
        var productElement = $("<div>").addClass("product");
        var productName = $("<h3>").text(product.name);
        var productPrice = $("<p>").text("Price: $" + product.price);
        var productDescription = $("<p>").text(product.description);
        
        productElement.append(productName, productPrice, productDescription);
        productListContainer.append(productElement);
    });
}