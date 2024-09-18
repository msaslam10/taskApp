<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do Task Manager</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
<!-- Add the image to the home page -->
        <img src="home-image.jpg" alt="To-Do List Image" class="home-image">
        <h1>My Tasks</h1>


 <!-- Login and Signup Section -->
        <div class="auth-forms">
            <!-- Login Form -->
            <div class="form-container" id="login-form">
                <h2>Login</h2>
                <form onsubmit="handleLogin(event)">
                    <input type="email" id="login-email" placeholder="Enter your email" required>
                    <input type="password" id="login-password" placeholder="Enter your password" required>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="#" onclick="switchForm('signup')">Sign Up</a></p>
                    <p><a href="#" onclick="switchForm('forgot')">Forgot Password?</a></p>
                </form>
            </div>

            <!-- Signup Form -->
            <div class="form-container" id="signup-form" style="display: none;">
                <h2>Sign Up</h2>
                <form onsubmit="handleSignUp(event)">
                    <input type="email" id="signup-email" placeholder="Enter your email" required>
                    <input type="password" id="signup-password" placeholder="Enter your password" required>
                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <a href="#" onclick="switchForm('login')">Login</a></p>
                </form>
            </div>

            <!-- Forgot Password Form -->
            <div class="form-container" id="forgot-form" style="display: none;">
                <h2>Forgot Password</h2>
                <form onsubmit="handleForgotPassword(event)">
                    <input type="email" id="forgot-email" placeholder="Enter your email" required>
                    <button type="submit">Reset Password</button>
                    <p><a href="#" onclick="switchForm('login')">Back to Login</a></p>
                </form>
            </div>
        </div>

<!-- Task Manager Section (Only visible after login) -->
        <div class="task-manager" id="task-manager" style="display: none;">

        <!-- Input form for adding tasks -->
        <form id="task-form">
            <input type="text" id="task-title" placeholder="Task Title" required>
            <textarea id="task-desc" placeholder="Task Description (optional)"></textarea>
            <button type="submit">Add Task</button>
        </form>

        <!-- Task list -->
        <ul id="task-list"></ul>
    </div>

    <script src="app.js"></script>
</body>
</html>