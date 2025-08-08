
const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("nav-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
    });
});

const yearSpan = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;
