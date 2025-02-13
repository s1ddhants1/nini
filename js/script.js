document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  const toggleMenu = () => {
    navLinks.classList.toggle("nav-active");
  };

  menuIcon.addEventListener("click", toggleMenu);
});
