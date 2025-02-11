document.addEventListener("DOMContentLoaded", function () {
  // Play music when the button is clicked
  const musicButton = document.getElementById("play-music");
  const backgroundMusic = document.getElementById("background-music");

  musicButton.addEventListener("click", function () {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      backgroundMusic.pause();
      musicButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Typing Animation Logic
  const lines = document.querySelectorAll(".typing-animation p");
  
  function showLine(index) {
    if (index < lines.length) {
      lines[index].classList.add("animated"); // Start typing effect

      // When this animation ends, start the next line
      setTimeout(() => {
        lines[index].classList.add("completed"); // Remove cursor after typing
        showLine(index + 1);
      }, 2500); // Adjust time to match animation duration
    }
  }

  setTimeout(() => showLine(0), 1000); // Start after 1s delay
});
