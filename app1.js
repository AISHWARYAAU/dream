document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('.sign-in-form');

    // Function to handle form submission and redirect
    function handleLogin(event) {
        event.preventDefault();
        const username = signInForm.querySelector('input[type="text"]').value.trim();
        const password = signInForm.querySelector('input[type="password"]').value.trim();

        // Simulate successful login (replace with actual backend validation)
        if (username === 'admin' && password === 'admin') {
            // Redirect to main.html upon successful login for admin
            window.location.href = 'main.html';
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    }

    // Form submission handling for sign-in
    signInForm.addEventListener('submit', handleLogin);
});
