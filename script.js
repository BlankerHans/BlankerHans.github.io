// JavaScript functionality for the website

// JavaScript functionality for Dark Mode / Light Mode

document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const lightModeBtn = document.getElementById('lightModeBtn');
    const body = document.body;

    // Event listener for Dark Mode button
    darkModeBtn.addEventListener('click', function () {
        body.classList.add('dark-mode');
    });

    // Event listener for Light Mode button
    lightModeBtn.addEventListener('click', function () {
        body.classList.remove('dark-mode');
    });
});

