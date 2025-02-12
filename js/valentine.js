document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let delay = 0;

  // Function to animate text line by line
  const animateText = (line, index) => {
    const text = line.getAttribute("data-text"); // Get the text from data attribute
    let i = 0;
    line.textContent = ''; // Clear the line text initially

    // Add cursor initially
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    line.appendChild(cursor);

    const interval = setInterval(() => {
      if (i < text.length) {
        line.textContent += text[i]; // Add one letter at a time
        i++;
      } else {
        clearInterval(interval); // Stop typing once full line is typed
        cursor.remove(); // Remove cursor after typing
        line.style.opacity = 1; // Make text visible
        line.style.visibility = 'visible'; // Ensure visibility
      }
    }, 100); // Adjust speed of typing
  };

  // Trigger animation for each line
  lines.forEach((line, index) => {
    setTimeout(() => animateText(line, index), delay);
    delay += 2500; // Delay next line animation
  });

  // ----- BACKGROUND MUSIC FUNCTIONALITY -----
  const music = document.getElementById("background-music");
  const playButton = document.getElementById("play-music");
  const playIcon = playButton.querySelector("i");

  // Function to handle play/pause logic
  const togglePlayState = () => {
    if (music.paused) {
      music.muted = false;
      music.play()
        .then(() => {
          playIcon.classList.replace("fa-play", "fa-pause");
        })
        .catch(err => console.warn("Autoplay Blocked:", err));
    } else {
      music.pause();
      playIcon.classList.replace("fa-pause", "fa-play");
    }
  };

  // Play music automatically on load (only if allowed)
  const playMusicOnLoad = () => {
    music.muted = false;
    music.play()
      .then(() => {
        playIcon.classList.replace("fa-play", "fa-pause");
      })
      .catch(err => console.warn("Autoplay Blocked:", err));
  };

  // Event listener for play button
  playButton.addEventListener("click", togglePlayState);

  // Attempt to autoplay music on load
  playMusicOnLoad();
});
