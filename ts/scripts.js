// Define the menu toggle function
function toggleMenu() {
    var mobileMenu = document.getElementById('mobileMenu');
    var menuIcon = document.getElementById('menuIcon');
    var closeIcon = document.getElementById('closeIcon');
    // Toggle visibility of mobile menu and icons
    if (mobileMenu && menuIcon && closeIcon) {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }
}
// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    var yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }
});
