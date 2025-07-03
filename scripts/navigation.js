const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    menuButton.setAttribute(
        "aria-label",
        navMenu.classList.contains("show") ? "Fechar menu" : "Abrir menu"
    );
});