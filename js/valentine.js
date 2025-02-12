document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let delay = 0;

  // Function to animate text line by line with only one blinking cursor
  const animateText = (line, index) => {
    setTimeout(() => {
      // Add typing animation
      line.classList.add("animated");

      // Remove cursor from previous lines
      if (index > 0) {
        lines[index - 1].classList.remove("cursor");
      }

      // Add cursor to the current line
      line.classList.add("cursor");

      // Remove the cursor after typing is completed
      setTimeout(() => {
        line.classList.remove("cursor");
      }, 2000);
    }, delay);

    delay += 2500; // Delay for next line animation
  };

  // Trigger animation for each line
  lines.forEach(animateText);

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
