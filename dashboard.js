function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName'); // Retrieve the name from local storage

    if (userName) {
        // Update the welcome message
        const welcomeMessage = document.querySelector('.dashboard-content h3');
        welcomeMessage.textContent = `Welcome, ${userName}!`;
    }
});
