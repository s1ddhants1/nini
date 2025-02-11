document.addEventListener("DOMContentLoaded", function () {
  // Homepage Elements //
  // Elements for the hamburger menu
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  
  // Handle hamburger menu toggle
  const toggleMenu = () => {
    navLinks.classList.toggle('nav-active');
  };
  // Toggle menu on click
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
  
