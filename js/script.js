document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const body = document.body;

  const toggleMenu = () => {
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
  });

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("dark");
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });

  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.classList.add("dark");
  }
});
