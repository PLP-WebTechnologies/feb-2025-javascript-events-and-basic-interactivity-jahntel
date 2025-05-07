document.getElementById("colorButton").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "red" ? "blue" : "red";
});

document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("Secret unlocked!");
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    let valid = true;

    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
        emailError.textContent = "Invalid email format!";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    let password = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters!";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) event.preventDefault();
});