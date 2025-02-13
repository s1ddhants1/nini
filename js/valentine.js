document.addEventListener("DOMContentLoaded", function () {
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;
  lines.forEach((line) => {
    setTimeout(() => {
      line.style.width = line.scrollWidth + 'px';
      line.style.opacity = 1;
      setTimeout(() => {
        line.style.borderRight = 'none';
      }, 2000);
    }, delay);
    delay += 2500;
  });
 
  function playMusic() {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
      }).catch(err => console.warn("Autoplay blocked, use the button!"));
    } else {
      music.pause();
      isPlaying = false;
      playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  }

  // Try to autoplay music, if not, use the button
  playMusic();

  // Button click to toggle music
  playButton.addEventListener("click", playMusic);

  // Start typing animation after a small delay
  setTimeout(() => startTypingAnimation(), 1000);
});
