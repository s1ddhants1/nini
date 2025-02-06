document.addEventListener("DOMContentLoaded", function () {
  // Select all paragraphs in the typing animation container
  let lines = document.querySelectorAll('.typing-animation p');
  let delay = 0;

  // Loop through each line and animate it
  lines.forEach((line, index) => {
    // Delay each line's appearance
    setTimeout(() => {
      // Transition for width and opacity
      line.style.transition = 'width 2s ease, opacity 1s ease';
      line.style.width = line.scrollWidth + 'px'; // Expand the width based on the text
      line.style.opacity = 1;

      // Remove the blinking cursor after the current line finishes typing
      setTimeout(() => {
        line.style.borderRight = 'none'; // Hide the cursor
      }, 2000); // 
    }, delay);

    delay += 2500; // time between lines appearing
  });

  // Handle background music autoplay
  const music = document.getElementById('background-music');

  // Atuoplay Restrictions Bypass
  setTimeout(() => {
    music.muted = false;
    music.play().catch((err) => {
      console.error('Autoplay blocked:', err);
    });
  }, 1000);
});
