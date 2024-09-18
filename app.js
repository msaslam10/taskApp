// Function to switch between forms
function switchForm(form) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById('task-manager').style.display = 'none';

    document.getElementById(`${form}-form`).style.display = 'block';
    document.getElementById('auth-forms').style.display = 'block';
}

// Handle Login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate login success
    alert('Logged in successfully!');
    
    // Show the task manager after login
    document.getElementById('task-manager').style.display = 'block';
    document.getElementById('auth-forms').style.display = 'none'; // Hide login/signup forms
});

// Handle Sign Up
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created successfully! Now login.');
    switchForm('login'); // Switch to login form after sign-up
});

// Handle Forgot Password
document.getElementById('forgot-password').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password reset link sent to your email!');
    switchForm('login'); // Switch back to login form after forgot password
});
