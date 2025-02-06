document.addEventListener("DOMContentLoaded", function () {
  // Typing animation for text
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px';
      line.style.opacity = 1;

      // Remove blinking cursor after the last line
      if (index === lines.length - 1) {
        setTimeout(() => {
          line.style.borderRight = 'none';
        }, 2000); // Adjust delay if needed
      }
    }, delay);
    delay += 2500;
  });

  // Handle background music autoplay
  const music = document.getElementById('background-music');

  // Unmute after a brief delay to bypass autoplay restrictions
  setTimeout(() => {
    music.muted = false;
    music.play().catch((err) => {
      console.error('Autoplay blocked:', err);
    });
  }, 1000);
});
