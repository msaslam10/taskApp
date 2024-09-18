  function previewProfilePic(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const preview = document.getElementById('profile-pic-preview');
        preview.src = reader.result;
        preview.style.display = 'block'; // Make the preview visible
    }
    reader.readAsDataURL(event.target.files[0]);
}
