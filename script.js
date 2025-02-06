document.addEventListener("DOMContentLoaded", function () {
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px';
      line.style.opacity = 1;

      setTimeout(() => {
        line.style.borderRight = 'none'; 
      }, 2000); 
    }, delay);

    delay += 2500; 

  const music = document.getElementById('background-music');

  setTimeout(() => {
    music.muted = false;
    music.play().catch((err) => {
      console.error('Autoplay blocked:', err);
    });
  }, 1000);
});
