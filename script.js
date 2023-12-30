document.addEventListener('DOMContentLoaded', function () {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const lightModeBtn = document.getElementById('lightModeBtn');
    const htmlElement = document.documentElement;

    // Event listener for Dark Mode button
    darkModeBtn.addEventListener('click', function () {
        htmlElement.classList.add('dark-mode');
    });

    // Event listener for Light Mode button
    lightModeBtn.addEventListener('click', function () {
        htmlElement.classList.remove('dark-mode');
    });
});

