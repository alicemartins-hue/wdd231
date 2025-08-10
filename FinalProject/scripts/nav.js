const logo = document.getElementById('desktop-logo')
const mobileLogo = document.getElementById('mobile-logo')
const navLogo = document.getElementById('nav-logo')

function repositionLogo() {
    if (window.matchMedia("(max-width: 38rem)").matches) {
        if (!mobileLogo.contains(logo)) {
            mobileLogo.appendChild(logo);
        }
    } else {
        if (!navLogo.contains(logo)) {
            navLogo.appendChild(logo);
        }
    }
}

window.addEventListener('load', repositionLogo);
window.addEventListener('resize', repositionLogo);


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