// Toggle Menu for Mobile Devices
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });
});