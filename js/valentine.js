document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let delay = 0;

  // Function to animate text line by line
  const animateText = (line, index) => {
    setTimeout(() => {
      line.classList.add("animated"); // Start typing animation

      // Remove the blinking cursor after animation
      setTimeout(() => {
        line.classList.add("completed"); // Stops cursor blinking
      }, 2000);
    }, delay);

    delay += 2500; // Delay next line animation
  };

  // Trigger animation for each line
  lines.forEach((line, index) => animateText(line, index));

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
