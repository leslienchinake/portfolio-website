// FUNCTION: validate form
function validateForm(name, email, message) {
    if (name === "" || email === "" || message === "") {
        return false;
    }
    return true;
}

// EVENT: form submission
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        // CONTROL STATEMENT (if condition)
        if (validateForm(name, email, message)) {
            alert("✅ Message sent successfully!");
        } else {
            alert("❌ Please fill in all fields.");
        }
    });

});

// EVENT: button click example
function showMessage() {
    alert("Welcome to my portfolio!");
}