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

  // Dark Mode Toggle
  darkModeToggle.parentElement.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    darkModeToggle.classList.toggle("fa-moon", !isDark);
    darkModeToggle.classList.toggle("fa-sun", isDark);
    localStorage.setItem("darkMode", isDark);
  });

  // Load Dark Mode State
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.classList.replace("fa-moon", "fa-sun");
  }
});
