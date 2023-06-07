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
  const question = document.getElementById('question');
  const options = document.getElementById('options');
  const feedback = document.getElementById('feedback');

  question.innerHTML = level.question;
  options.innerHTML = '';
  feedback.innerHTML = '';
  selectButton.classList.remove('hidden');
  nextButton.classList.add('hidden');

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
  const options = document.getElementsByClassName('option');
  Array.from(options).forEach((option, i) => {
    if (i === index && selectedOption.isCorrect) {
      option.classList.add('correct');
    } else {
      option.classList.remove('correct');
    }
  });

  // Show feedback
  const feedback = document.getElementById('feedback');
  feedback.innerHTML = selectedOption.isCorrect ? 'Correct!' : 'Incorrect!';

  // Hide select button, show next button
  selectButton.classList.add('hidden');
  nextButton.classList.remove('hidden');
}

// Handle next button click
nextButton.addEventListener('click', () => {
  slides[currentLevel].classList.add('hidden');
  currentLevel++;
  if (currentLevel < levels.length) {
    slides[currentLevel].classList.remove('hidden');
  } else {
    // All levels completed
    const question = document.getElementById('question');
    const options = document.getElementById('options');
    const feedback = document.getElementById('feedback');
    question.innerHTML = 'All levels completed!';
    options.innerHTML = '';
    feedback.innerHTML = '';
    selectButton.classList.add('hidden');
    nextButton.classList.add('hidden');
  }
});

// Initialize first level
initializeLevel(currentLevel);
