// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    // Close menu after clicking a link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}
