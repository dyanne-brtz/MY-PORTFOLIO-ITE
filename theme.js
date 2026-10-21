const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    if (themeToggle) {
        const updateIcons = () => {
            if (document.body.classList.contains('light-mode')) {
                if (moonIcon) moonIcon.style.display = 'none';
                if (sunIcon) sunIcon.style.display = 'block';
            } else {
                if (moonIcon) moonIcon.style.display = 'block';
                if (sunIcon) sunIcon.style.display = 'none';
            }
        };

        updateIcons();

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
            
            updateIcons();
        });
    }
});

function updateClock() {
    const clockElement = document.getElementById("real-time-clock");
    if (clockElement) {
        const now = new Date();
        
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', dateOptions);
        
        const formattedTime = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        
        clockElement.textContent = `${formattedDate} | ${formattedTime}`;
    }
}

if (document.getElementById("real-time-clock")) {
    setInterval(updateClock, 1000);
    updateClock();
}