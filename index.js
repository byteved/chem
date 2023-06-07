// Array of levels/questions
// Array of question sets for each level
const questionSets = [
  {
    level: 1,
    questions: [
      {
        question: "Question 1 - Level 1",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 0
      },
      {
        question: "Question 2 - Level 1",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 1
      },
      // Add more questions for level 1
    ]
  },
  {
    level: 2,
    questions: [
      {
        question: "Question 1 - Level 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 2
      },
      {
        question: "Question 2 - Level 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 3
      },
      // Add more questions for level 2
    ]
  },
  // Add more levels
];

// Track the current level and question index
let currentLevel = 0;
let currentQuestionIndex = 0;

// Function to load the current question
function loadQuestion() {
  const currentQuestion = questionSets[currentLevel].questions[currentQuestionIndex];
  const questionElement = document.querySelector(".question");
  const optionsContainer = document.querySelector(".options");

  // Update the question text
  questionElement.textContent = currentQuestion.question;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Create the new options
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    optionsContainer.appendChild(button);

    // Add click event listener to each option
    button.addEventListener("click", () => handleOptionClick(index));
  });
}

// Function to handle option click
function handleOptionClick(selectedOption) {
  const currentQuestion = questionSets[currentLevel].questions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  // Disable clicking on options
  options.forEach(option => option.removeEventListener("click", handleOptionClick));

  // Show feedback for selected option
  if (selectedOption === currentQuestion.answer) {
    options[selectedOption].classList.add("correct");
  }

  // Show the next button
  const selectButton = document.querySelector(".select-button");
  selectButton.classList.add("hidden");
  const nextButton = document.querySelector(".next-button");
  nextButton.classList.remove("hidden");
}

// Function to load the next question or level
function loadNext() {
  const nextButton = document.querySelector(".next-button");

  // If there are more questions in the current level
  if (currentQuestionIndex < questionSets[currentLevel].questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    nextButton.classList.add("hidden");
  } else {
    // If there are more levels
    if (currentLevel < questionSets.length - 1) {
      currentLevel++;
      currentQuestionIndex = 0;
      loadQuestion();
      nextButton.classList.add("hidden");
    } else {
      // If all levels and questions are completed
      // You can add the code here for what to do when the quiz is finished
    }
  }
}

// Event listener for next button click
const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", loadNext);

// Start the quiz by loading the initial question
loadQuestion();


