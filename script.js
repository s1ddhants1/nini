document.addEventListener("DOMContentLoaded", function () {
  // Typing animation for text
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  lines.forEach((line, index) => {
    // Delay each line's appearance
    setTimeout(() => {
      // Transition for width and opacity
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px'; // Expand the width based on the text
      line.style.opacity = 1;

      // Remove the blinking cursor after the last line finishes typing
      if (index === lines.length - 1) {
        setTimeout(() => {
          line.style.borderRight = 'none'; // Hide the cursor
        }, 2000); // Adjust the delay to match the typing duration
      }
    }, delay);
    delay += 2500; // Adjust time between lines appearing
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
