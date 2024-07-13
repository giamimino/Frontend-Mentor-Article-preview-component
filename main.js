function setupUserClick() {
    var screenWidth = window.innerWidth;
    var maxWidth = 425; // Maximum width for alternate design

    if (screenWidth <= maxWidth) {
        // Example: Toggle class on click for small screens
        document.querySelector('.user').addEventListener('click', function() {
            this.classList.toggle('active');
        });
    } else {
        // Example: Different behavior for larger screens
        document.querySelector('.user').addEventListener('click', function() {
            // Add your logic for larger screens here
            alert('Clicked on user (larger screen behavior)');
        });
    }
}

// Initial setup on page load
setupUserClick();

// Event listener for window resize (optional)
window.addEventListener('resize', function() {
    setupUserClick();
});