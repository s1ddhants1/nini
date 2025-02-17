document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;
  const header = document.querySelector("header");

  const toggleMenu = (event) => {
    event.stopPropagation();
    const isActive = navLinks.classList.contains("nav-active");
    navLinks.classList.toggle("nav-active");
    menuIcon.classList.toggle("open");
    menuIcon.setAttribute("aria-expanded", !isActive);

    if (!isActive) {
      setTimeout(() => (navLinks.style.opacity = "1"), 50);
    } else {
      navLinks.style.opacity = "0";
    }
  };

  menuIcon.addEventListener("click", toggleMenu);

  document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove("nav-active");
      menuIcon.classList.remove("open");
      menuIcon.setAttribute("aria-expanded", "false");
    }
  })
