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
function handleLogin() {
    if (validateForm()) {
        // Proceed with login (e.g., send data to server)
        alert('Login successful!');
    }
}

// Function to open additional information
function openLoginInfo() {
    document.querySelector('.box-info').style.display = 'block';
}

// Function to close additional information
function closeLoginInfo() {
    document.querySelector('.box-info').style.display = 'none';
}

// Event listener for the login button
document.getElementById('do_login').addEventListener('click', handleLogin);