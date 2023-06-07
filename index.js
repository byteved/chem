const options = document.querySelectorAll('.option');
const selectedImage = document.getElementById('selected-image');
const feedbackElement = document.getElementById('feedback');
const selectButton = document.getElementById('select-button');

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
  {
    question: 'Question 2',
    options: [
      { text: 'Option 1', image: 'option1.jpg' },
      { text: 'Option 2', image: 'option2.jpg' },
      { text: 'Option 3', image: 'option3.jpg' },
      { text: 'Option 4', image: 'option4.jpg' }
    ],
    correctOptionIndex: 0 // Index of the correct option (starting from 0)
  }
  // Add more levels here
];

let currentLevel = 0;

// Set up the current level
function setUpLevel(level) {
  const currentLevelData = levels[level];

  // Clear previous selection
  options.forEach(option => {
    option.classList.remove('selected', 'correct');
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

  // Disable the select button
  selectButton.disabled = true;
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
    selectedOption.classList.add('correct');

    // Enable the select button
    selectButton.disabled = false;
  } else {
    // Incorrect option selected
    feedbackElement.innerText = 'Try again!';
    selectedOption.classList.remove('correct');

    // Disable the select button
    selectButton.disabled = true;
  }
}

// Handle select button click
selectButton.addEventListener('click', () => {
  if (options[currentLevel].classList.contains('correct')) {
    document.body.classList.add('rainbow-background');

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
          option.classList.remove('selected', 'correct');
          option.style.cursor = 'default';
        });
        selectButton.disabled = true;
      }
    }, 1000);
  }
});

// Start the game by setting up the first level
setUpLevel(currentLevel);
