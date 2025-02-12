document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let currentLine = 0;

  // Function to simulate typing effect
  const typeLine = (line, index) => {
    const text = line.textContent.trim(); // Get full text
    line.textContent = ""; // Clear text initially
    line.classList.add("cursor"); // Add blinking cursor

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        line.textContent += text[i]; // Add next letter
        i++;
      } else {
        clearInterval(interval); // Stop typing
        line.classList.remove("cursor"); // Remove cursor after typing

        if (index < lines.length - 1) {
          setTimeout(() => typeLine(lines[index + 1], index + 1), 500); // Delay before next line
        }
      }
    }, 100); // Typing speed
  };

  // Start typing the first line
  typeLine(lines[currentLine], currentLine);

  // ----- BACKGROUND MUSIC FUNCTIONALITY -----
  const music = document.getElementById("background-music");
  const playButton = document.getElementById("play-music");
  const playIcon = playButton.querySelector("i");

  // Function to handle play/pause logic
  const togglePlayState = () => {
    if (music.paused) {
      music.play()
        .then(() => {
          playIcon.classList.replace("fa-play", "fa-pause");
          playButton.classList.remove("attention"); // Remove attention effect if music starts
        })
        .catch(err => console.warn("Autoplay Blocked:", err));
    } else {
      music.pause();
      playIcon.classList.replace("fa-pause", "fa-play");
    }
  };

  // Event listener for play button
  playButton.addEventListener("click", togglePlayState);

  // ----- AUTOPLAY MUSIC ON LOAD -----
  const playMusicOnLoad = () => {
    music.play()
      .then(() => playIcon.classList.replace("fa-play", "fa-pause"))
      .catch(err => {
        console.warn("Autoplay Blocked. User interaction required:", err);
        playButton.classList.add("attention"); // Highlight button if autoplay fails
      });
  };

  // Attempt autoplay after a short delay (helps with some browser policies)
  setTimeout(playMusicOnLoad, 1000);
});
