document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".typing-animation p");
  let delay = 0;

  // Function to animate text line by line
  const animateText = (line) => {
    setTimeout(() => {
      line.classList.add("animated"); // Start typing animation
      setTimeout(() => {
        line.classList.add("completed"); // Stops cursor blinking
      }, 2000);
    }, delay);
    delay += 2500; // Delay for next line
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
