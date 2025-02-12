document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  const music = document.getElementById("background-music");
  const playButton = document.getElementById("play-music");
  const playIcon = playButton.querySelector("i");
  
  let delay = 0;

  // Typing animation for each line
  const typeText = (line, text) => {
    let i = 0;
    line.textContent = ''; // Clear the text
    const interval = setInterval(() => {
      line.textContent += text[i];
      i++;
      if (i === text.length) {
        clearInterval(interval); // Stop typing once text is complete
      }
    }, 100); // Adjust typing speed
  };

  // Start typing animation for each line
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = 1; // Make line visible
      line.style.visibility = 'visible'; // Ensure it's visible
      typeText(line, line.getAttribute("data-text"));
    }, delay);
    delay += 2500; // Delay the next line animation
  });

  // Play/pause background music
  const togglePlayState = () => {
    if (music.paused) {
      music.muted = false;
      music.play();
      playIcon.classList.replace("fa-play", "fa-pause");
    } else {
      music.pause();
      playIcon.classList.replace("fa-pause", "fa-play");
    }
  };

  // Auto-play background music when the page loads
  music.muted = false;
  music.play().catch(err => console.warn("Autoplay Blocked:", err));

  // Event listener for play button
  playButton.addEventListener("click", togglePlayState);
});
