// This file handles the user registration/login functionality

$(document).ready(function() {
    // Handle user registration form submission
    $("#registrationForm").submit(function(event) {
        event.preventDefault();
        var userData = $(this).serialize();
        // Make AJAX request to register the user in the backend API
        $.ajax({
            url: "/users/register",
            method: "POST",
            data: userData,
            success: function(response) {
                // Handle success response
                console.log("User registered successfully:", response);
            },
            error: function(error) {
                console.log("Error registering user:", error);
            }
        });
    });

    // Handle user login form submission
    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var credentials = $(this).serialize();
        // Make AJAX request to login the user in the backend API
        $.ajax({
            url: "/users/login",
            method: "POST",
            data: credentials,
            success: function(response) {
                // Handle success response
                console.log("User logged in successfully:", response);
            },
            error: function(error) {
                console.log("Error logging in user:", error);
            }
        });
    });
});
