// Select DOM Items
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const mainContent = document.querySelector("main");

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        mainContent.classList.add("show");
        menuBtn.classList.add("close");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        menu.classList.add("show");
        navItems.forEach((item) => {
            item.classList.add("show");
        });
        // Set Menu State
        showMenu = true;
    } else {
        mainContent.classList.remove("show");
        menuBtn.classList.remove("close");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        menu.classList.remove("show");
        navItems.forEach((item) => {
            item.classList.remove("show");
        });

        // Set Menu State
        showMenu = false;
    }
}

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
