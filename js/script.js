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
  
  // Valentine Page Elements //
 document.addEventListener("DOMContentLoaded", function () {
  // Typing Animation
  const lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  // Display each line with a delay
  lines.forEach((line) => {
    setTimeout(() => {
      line.style.opacity = 1;
      line.style.transition = "opacity 1s ease-in";
    }, delay);
    delay += 2500;
  });

  // Music Elements
  const music = document.getElementById('background-music');
  const playButton = document.getElementById('play-music');
  const playIcon = playButton.querySelector('i');

  // Toggle Play/Pause State
  const togglePlayState = () => {
    if (music.paused) {
      music.play().then(() => {
        playIcon.classList.replace('fa-play', 'fa-pause');
      }).catch(err => console.warn('Autoplay Blocked:', err));
    } else {
      music.pause();
      playIcon.classList.replace('fa-pause', 'fa-play');
    }
  };

  // Auto-Play Music (with error handling for autoplay restrictions)
  const playMusicOnLoad = () => {
    music.play().then(() => {
      playIcon.classList.replace('fa-play', 'fa-pause');
    }).catch(err => console.warn('Autoplay Blocked:', err));
  };

  // Event Listeners
  playButton.addEventListener('click', togglePlayState);

  // Attempt Auto Music Play
  playMusicOnLoad();
});
