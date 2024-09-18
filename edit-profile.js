document.addEventListener('DOMContentLoaded', function() {
    const editProfileForm = document.getElementById('edit-profile-form');
    const cancelBtn = document.getElementById('cancel-edit');

    // Handle form submission
    editProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
        // Optionally, redirect or update UI here
    });

    // Handle cancel button
    cancelBtn.addEventListener('click', function() {
        // Optionally, redirect or go back to the previous page
        window.location.href = 'home.html'; // Redirect back to home
    });
});

