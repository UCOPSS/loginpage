document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email and password input values
        const email = document.querySelector('input[type="email"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        // Validate email and password
        if (email === '' || password === '') {
            alert('Please enter both email and password.');
        } else {
            // If both fields are filled, submit the form (or perform further actions)
            alert('Form submitted successfully!');
            // You can also submit the form using AJAX or perform other tasks here
        }
    });
});
