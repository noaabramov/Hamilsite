document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Guess the Song
    const songGuessButton = document.getElementById('songGuessButton');
    const songResultMessage = document.getElementById('songResultMessage');
    const correctSongName = "My Shot";
  
    songGuessButton.addEventListener('click', () => {
      const userGuess = document.getElementById('songGuessInput').value.trim();
      if (userGuess.toLowerCase() === correctSongName.toLowerCase()) {
        songResultMessage.textContent = "Correct! You guessed the song!";
      } else {
        songResultMessage.textContent = "Incorrect. Try again!";
      }
    });
  
    // Step 2: Select the Correct Image
    const imageOptions = document.getElementById('imageOptions');
    const imageResultMessage = document.getElementById('imageResultMessage');
    const correctImageIndex = 1;
  
    imageOptions.addEventListener('click', (event) => {
      if (event.target.tagName === 'IMG') {
        const selectedImageIndex = Array.from(imageOptions.children).indexOf(event.target);
        if (selectedImageIndex === correctImageIndex) {
          imageResultMessage.textContent = "Correct! You selected the right image!";
        } else {
          imageResultMessage.textContent = "Incorrect. Try again!";
        }
      }
    });
  
    // Step 3: Fill in the Blank
    const fillInTheBlankButton = document.getElementById('fillInTheBlankButton');
    const fillInTheBlankResultMessage = document.getElementById('fillInTheBlankResultMessage');
    const correctMissingWord = "story";
  
    fillInTheBlankButton.addEventListener('click', () => {
      const userGuess = document.getElementById('fillInTheBlankInput').value.trim().toLowerCase();
      if (userGuess === correctMissingWord) {
        fillInTheBlankResultMessage.textContent = "Correct! You filled in the blank!";
      } else {
        fillInTheBlankResultMessage.textContent = "Incorrect. Try again!";
      }
    });
  
    // Back button functionality
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to the homepage
      });
});
  