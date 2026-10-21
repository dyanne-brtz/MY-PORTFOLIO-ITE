const correctPIN = "0123";

const pinForm = document.getElementById("pin-form");

if (pinForm) {
    pinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredPIN = document.getElementById("pin-input").value;
        const pinMessage = document.getElementById("pin-message");

        if (enteredPIN === correctPIN) {
            pinMessage.textContent = "Access granted! Welcome in...";

            setTimeout(function () {
                window.location.href = "home.html";
            }, 700);
        } else {
            pinMessage.textContent = "Incorrect PIN. Please try again.";
            document.getElementById("pin-input").value = "";
            document.getElementById("pin-input").focus();
        }
    });
}

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeIcon) themeIcon.textContent = '☀️';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            if (themeIcon) themeIcon.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            if (themeIcon) themeIcon.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
}