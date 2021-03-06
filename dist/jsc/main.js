// Select DOM Items
const lgHeading = document.querySelector(".lg-heading");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const iconItems = document.querySelectorAll(".icon-item");

// Set Initial State Of Menu
let showMenu = false;

window.onload = function exampleFunction() {
  console.log("window.onload Esta test");
  if (!showMenu) {
    lgHeading.classList.add("show");
    iconItems.forEach((item) => item.classList.add("show"));
  } else {
    lgHeading.classList.remove("show");
    iconItems.forEach((item) => item.classList.remove("show"));
  }
};

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}
