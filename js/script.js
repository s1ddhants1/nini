document.addEventListener("DOMContentLoaded", function () {  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Toggle navigation menu
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
  });

  // Load saved theme preference
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Toggle dark mode
  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    // Toggle icon
    toggleButton.innerHTML = isDarkMode
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

    // Save preference
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });
});

document.querySelectorAll("h3").forEach(h3 => {
    h3.addEventListener("click", function(event) {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;
        heart.style.fontSize = "24px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatUp 1s ease-out";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
});

// CSS animation for floating effect
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-50px); opacity: 0; }
}`;
document.head.appendChild(style);
