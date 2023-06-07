const options = document.querySelectorAll('.option');
const selectedImage = document.getElementById('selected-image');
const feedbackElement = document.getElementById('feedback');

const levels = [
  {
    question: 'Question 1',
    options: [
      { text: 'Option 1', image: 'option1.jpg' },
      { text: 'Option 2', image: 'option2.jpg' },
      { text: 'Option 3', image: 'option3.jpg' },
      { text: 'Option 4', image: 'option4.jpg' }
    ],
    correctOptionIndex: 2 // Index of the correct option (starting from 0)
  },
  // Add more levels here
];

let currentLevel = 0;

// Set up the current level
function setUpLevel(level) {
  const currentLevelData = levels[level];

  // Clear previous selection
  options.forEach(option => {
    option.classList.remove('selected');
  });

  // Update the question
  document.getElementById('question').innerText = currentLevelData.question;

  // Update the options and add click event listeners
  options.forEach((option, index) => {
    option.innerText = currentLevelData.options[index].text;

    option.addEventListener('click', () => {
      handleOptionSelection(index);
    });
  });

  // Clear the selected image
  selectedImage.src = '';

  // Clear the feedback
  feedbackElement.innerText = '';
}

// Handle option selection
function handleOptionSelection(selectedIndex) {
  const currentLevelData = levels[currentLevel];
  const selectedOption = options[selectedIndex];

  // Add a border to the selected option
  selectedOption.classList.add('selected');

  // Display the selected image
  selectedImage.src = currentLevelData.options[selectedIndex].image;

  if (selectedIndex === currentLevelData.correctOptionIndex) {
    // Correct option selected
    feedbackElement.innerText = 'Correct!';
    document.body.classList.add('rainbow-background');

    // Move to the next level after a brief delay
    setTimeout(() => {
      document.body.classList.remove('rainbow-background');
      currentLevel++;

      if (currentLevel < levels.length) {
        // Proceed to the next level
        setUpLevel(currentLevel);
      } else {
        // Reached the end of the game
        feedbackElement.innerText = 'Game Over!';
        options.forEach(option => {
          option.removeEventListener('click', handleOptionSelection);
          option.classList.remove('selected');
          option.style.cursor = 'default';
        });
      }
    }, 1000);
  } else {
    // Incorrect option selected
    feedbackElement.innerText = 'Try again!';
  }
}

// Start the game by setting up the first level
setUpLevel(currentLevel);
