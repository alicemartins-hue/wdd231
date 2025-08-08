const logo = document.getElementById('desktop-logo')
const mobileLogo = document.getElementById('mobile-logo')
const navLogo = document.getElementById('nav-logo')

function repositionLogo() {
    if (window.innerWidth < 768) {
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