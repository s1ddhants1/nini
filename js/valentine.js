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
setTimeout(() => startTypingAnimation(), 1000);
  
  let music = document.getElementById("background-music");
  let playButton = document.getElementById("play-music");
  let isPlaying = false;
  
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
  
  playMusic();
  playButton.addEventListener("click", playMusic);
});
