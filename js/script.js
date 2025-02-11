document.addEventListener("DOMContentLoaded", function () {
  // ----- HAMBURGER MENU FUNCTIONALITY -----
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Toggle menu on click
  const toggleMenu = () => {
    navLinks.classList.toggle("nav-active");
  };

  menuIcon.addEventListener("click", toggleMenu);
});
