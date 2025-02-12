document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let currentLine = 0;
  const typingSpeed = 100; // Speed of typing in ms
  const lineDelay = 500; // Delay between lines

  // Function to simulate typing effect
  const typeLine = (line, index) => {
    const text = line.getAttribute('data-text'); // Get the text from data attribute
    line.textContent = ''; // Clear line text
    line.classList.add("cursor"); // Add blinking cursor effect

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        line.textContent += text[i]; // Add one letter at a time
        i++;
      } else {
        clearInterval(interval); // Stop typing once full line is typed
        line.classList.remove("cursor"); // Remove cursor after typing

        // Delay and move to next line if there's one
        if (index < lines.length - 1) {
          setTimeout(() => typeLine(lines[index + 1], index + 1), lineDelay);
        }
      }
    }, typingSpeed);
  };

  // Initialize the typing effect for each line
  lines.forEach((line, index) => {
    // Set the data-text attribute for each line of text
    const lineText = line.textContent.trim();
    line.setAttribute('data-text', lineText);
    line.textContent = ''; // Clear the visible text
  });

  // Start typing the first line after a brief delay
  setTimeout(() => typeLine(lines[currentLine], currentLine), 1000);

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
