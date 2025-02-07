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

  const music = document.getElementById('background-music');
  const playButton = document.getElementById('play-music');
  const playIcon = playButton.querySelector('i');

  // Automatically play music on page load
  const playMusicOnLoad = () => {
    if (music.paused) {
      music.muted = false;
      music.play().then(() => {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
      }).catch(err => console.log('Autoplay Blocked:', err));
    }
  };

  playMusicOnLoad();

  playButton.addEventListener('click', () => {
    if (music.paused) {
      music.muted = false;
      music.play();
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    } else {
      music.pause();
      playIcon.classList.remove('fa-pause');
      playIcon.classList.add('fa-play');
    }
  });
});
