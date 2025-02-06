document.addEventListener("DOMContentLoaded", function () {
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  // Animate typing effect for each line of text
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px';  // Animate text width
      line.style.opacity = 1;  // Make text visible

      setTimeout(() => {
        line.style.borderRight = 'none';  // Remove cursor effect
      }, 2000); 
    }, delay);

    delay += 2500;  // Stagger animations for each line
  });

  // Play music immediately without delay
  const music = document.getElementById('background-music');
  music.muted = false;
  music.play().catch((err) => {
    console.error('Autoplay blocked:', err);
  });
});
