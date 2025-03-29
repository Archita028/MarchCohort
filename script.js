// JavaScript for handling user interactions on the login page

// Function to validate the login form
function validateForm() {
    const email = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}

// Function to handle login button click
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (validateForm()) {
        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;

        // Simulate login validation (replace with actual validation logic)
        if (username === 'admin@example.com' && password === 'password123') {
            // Redirect to the dashboard page on successful login
            window.location.href = 'dashboard.html';
        } else {
            // Display an error message for invalid credentials
            alert('Invalid username or password. Please try again.');
        }
    }
}

// Event listener for the login button
document.getElementById('do_login').addEventListener('click', handleLogin);

// Placeholder functions for other buttons
function forgotPassword() {
    alert('Forgot Password functionality is not implemented yet.');
}

function contactSupport() {
    alert('Contact Support functionality is not implemented yet.');
}

function createAccount() {
    alert('Create Account functionality is not implemented yet.');
}