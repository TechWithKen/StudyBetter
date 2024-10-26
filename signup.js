document.getElementById("showPassword").addEventListener("change", function() {
    const passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
  });
  
  document.getElementById("showConfirmPassword").addEventListener("change", function() {
    const confirmPasswordInput = document.getElementById("confirm-password");
    confirmPasswordInput.type = this.checked ? "text" : "password";
  });

  document.getElementById("Username").addEventListener("submit", function(event) {
    const Username = document.getElementById("Username").value;
    const warningMessage = document.getElementById("warning-message-name");

    for (var i = 0; i < Username.length; i++){
        if (Username[i] === " " || Username[i] === "."){
            warningMessage.textContent = "Username cannot contain spaces or special characters.";
            warningMessage.style.display = "block";
            event.preventDefault();
            return;
        }else{
            warningMessage.style.display = "none";
        }
    }
  });
  
document.getElementById("signup-form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const warningMessage = document.getElementById("warning-message");
  
    if (password !== confirmPassword) {
      warningMessage.textContent = "Passwords do not match. Please check and try again.";
      warningMessage.style.display = "block";
      event.preventDefault();
    } else {
      warningMessage.style.display = "none";
    }
  });
  