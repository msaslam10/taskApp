// Function to switch between forms
function switchForm(form) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'none';

    document.getElementById(`${form}-form`).style.display = 'block';
}

// Handle Login (for now, just demo purposes)
function handleLogin(event) {
    event.preventDefault();
    
    // Simulate login success (you can add real authentication here)
    alert('Logged in successfully!');
    
    // Show the task manager after login
    document.getElementById('task-manager').style.display = 'block';
    document.querySelector('.auth-forms').style.display = 'none'; // Hide login/signup forms
}

// Handle Sign Up (for now, just demo purposes)
function handleSignUp(event) {
    event.preventDefault();
    alert('Account created successfully! Now login.');
    switchForm('login'); // Switch to login form after sign-up
}

// Handle Forgot Password (for now, just demo purposes)
function handleForgotPassword(event) {
    event.preventDefault();
    alert('Password reset link sent to your email!');
    switchForm('login');
}

// Handle Adding Tasks
document.getElementById('task-form').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskDesc = document.getElementById('task-desc').value;

    if (taskTitle === '') {
        alert('Task title is required');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <div class="task-title">${taskTitle}</div>
        <div class="task-desc">${taskDesc}</div>
        <div class="task-actions">
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    // Clear the form after adding task
    document.getElementById('task-form').reset();
}

// Handle Deleting Tasks
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
