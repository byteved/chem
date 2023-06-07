const slideContainer = document.getElementById('slide-container');
const slides = document.getElementsByClassName('slide');
const selectButton = document.getElementById('select-button');
const nextButton = document.getElementById('next-button');

// Array of levels/questions
const levels = [
  {
    question: 'Question 1',
    options: [
      { text: 'Option 1', isCorrect: true },
      { text: 'Option 2', isCorrect: false },
      { text: 'Option 3', isCorrect: false },
      { text: 'Option 4', isCorrect: false },
    ],
  },
  // Add more levels here...
];

let currentLevel = 0;

// Initialize level
function initializeLevel(levelIndex) {
  const level = levels[levelIndex];
  question.innerHTML = level.question;
  options.innerHTML = '';

  // Create option buttons
  level.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option');
    optionButton.innerText = option.text;
    optionButton.dataset.index = index;
    optionButton.addEventListener('click', () => {
      handleOptionClick(index);
    });
    options.appendChild(optionButton);
  });
}

// Handle option button click
function handleOptionClick(index) {
  const selectedOption = levels[currentLevel].options[index];

  // Add green outline for correct option
  options.childNodes.forEach((option, i) => {
    if (i === index && selectedOption.isCorrect) {
      option.classList.add('correct');
    } else {
      option.classList.remove('correct');
    }
  });

  // Hide select button, show next button
  selectButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
}

// Handle next button click
nextButton.addEventListener('click', () => {
  slides[currentLevel].classList.add('hidden');
  currentLevel++;
  if (currentLevel < levels.length) {
    initializeLevel(currentLevel);
    slides[currentLevel].classList.add('fade-in');
  } else {
    // All levels completed
    question.innerHTML = 'All levels completed!';
    options.innerHTML = '';
    feedback.innerHTML = '';
    selectButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }
});

// Initialize first level
initializeLevel(currentLevel);
slides[currentLevel].classList.add('fade-in');
