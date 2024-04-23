
document.getElementById('check').onclick = togglePassword;

function togglePassword() {
    var pass = document.getElementById('password');

    if (check.checked) pass.type = "text";
    else pass.type = "password";
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        displayValues();
        document.getElementById('loginForm').reset(); // Reset the form
    } else {
        console.log("Please fill in all fields correctly.");
    }
});

function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Add your validation logic here
    // For simplicity, I'm just checking if all fields are filled

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        return false;
    }

    return true;
}

function displayValues() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    console.table([{ "Username": username, "Email": email, "Password": password }]);
}
    
