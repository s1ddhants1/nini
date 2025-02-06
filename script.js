document.addEventListener("DOMContentLoaded", function () {
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  lines.forEach((line) => {
    setTimeout(() => {
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px';
      line.style.opacity = 1;
    }, delay);
    delay += 2500;
  });

  const music = document.getElementById('background-music');
  const musicToggle = document.getElementById('music-toggle');

  musicToggle.addEventListener('click', function () {
    if (music.paused) {
      music.play();
      musicToggle.textContent = 'Pause Music';
    } else {
      music.pause();
      musicToggle.textContent = 'Play Music';
    }
  });
});
