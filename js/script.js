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
  // Elements for typing animation
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  // Elements for music control
  const music = document.getElementById('background-music');
  const playButton = document.getElementById('play-music');
  const playIcon = playButton.querySelector('i');


  // Function to handle the typing animation
  lines.forEach((line) => {
    setTimeout(() => {
      line.style.width = `${line.scrollWidth}px`;
      line.style.opacity = 1;

      setTimeout(() => {
        line.style.borderRight = 'none';
      }, 2000);
    }, delay);

    delay += 2500;
  });

  // Function to handle play/pause logic for music
  const togglePlayState = () => {
    if (music.paused) {
      music.muted = false;
      music.play().then(() => {
        playIcon.classList.replace('fa-play', 'fa-pause');
      }).catch(err => console.warn('Autoplay Blocked:', err));
    } else {
      music.pause();
      playIcon.classList.replace('fa-pause', 'fa-play');
    }
  };

  // Play music automatically on load
  
  const playMusicOnLoad = () => {
    music.muted = false;
    music.play().then(() => {
      playIcon.classList.replace('fa-play', 'fa-pause');
    }).catch(err => console.warn('Autoplay Blocked:', err));
  };

  // Event listeners
  playButton.addEventListener('click', togglePlayState);
});
playMusicOnLoad();
