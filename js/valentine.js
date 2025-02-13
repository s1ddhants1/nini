document.addEventListener("DOMContentLoaded", function () {
  const lines = [
    document.getElementById("line1"),
    document.getElementById("line2"),
    document.getElementById("line3"),
    document.getElementById("line4"),
    document.getElementById("line5")
  ];

  const typingSpeed = 80; // Speed of typing effect in ms
  const delayBetweenLines = 500; // Delay before the next line starts

  let music = document.getElementById("background-music");
  let playButton = document.getElementById("play-music");
  let isPlaying = false;

  function typeText(element, text, index, callback) {
    if (index < text.length) {
      element.innerHTML = text.substring(0, index + 1); // Show text incrementally
      setTimeout(() => typeText(element, text, index + 1, callback), typingSpeed);
    } else {
      if (element.id === "line3") {
        // Reapply gradient after typing (ensures color shows)
        element.style.background = "linear-gradient(90deg, #B2005A, #D80073, #FF66A3)";
        element.style.webkitBackgroundClip = "text";
        element.style.color = "transparent";
      }
      setTimeout(callback, delayBetweenLines);
    }
  }

  function startTypingAnimation(index = 0) {
    if (index < lines.length) {
      let element = lines[index];
      let text = element.textContent.trim();
      element.textContent = ""; // Clear text before typing
      element.style.visibility = "visible"; // Show element
      element.style.opacity = 1;
      typeText(element, text, 0, () => startTypingAnimation(index + 1));
    }
  }

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
  music.volume = 0.5; // Set a reasonable volume
  playMusic();

  // Button click to toggle music
  playButton.addEventListener("click", playMusic);

  // Start typing animation after a small delay
  setTimeout(() => startTypingAnimation(), 1000);
});
