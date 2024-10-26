document.getElementById("showPassword").addEventListener("change", function() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});

document.getElementById("showConfirmPassword").addEventListener("change", function() {
    const confirmPasswordInput = document.getElementById("confirm-password");
    confirmPasswordInput.type = this.checked ? "text" : "password";
});

// Ensure your form has the ID 'signup-form'
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById("password").value; // Fixed duplicate declaration
    const confirmPassword = document.getElementById("confirm-password").value;
    const warningMessage = document.getElementById("warning-message");

    // Username validation
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(username)) {
        alert('Username can only contain letters and numbers. No spaces or special characters allowed.');
        return; // Stop further execution if username is invalid
    }

    // Password match validation
    if (password !== confirmPassword) {
        warningMessage.textContent = "Passwords do not match. Please check and try again.";
        warningMessage.style.display = "block";
    } else {
        warningMessage.style.display = "none";
        // Store name in local storage
        localStorage.setItem('userName', username);
        // Redirect to the dashboard
        window.location.href = "dashboard.html";
    }
});
