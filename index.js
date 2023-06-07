const questions = [
  {
    question: "Question 1: What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correctOption: "Paris"
  },
  {
    question: "Question 2: What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Venus"],
    correctOption: "Jupiter"
  },
  {
    question: "Question 3: Who painted the Mona Lisa?",
    options: ["Michelangelo", "Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"],
    correctOption: "Leonardo da Vinci"
  }
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const submitButton = document.getElementById("submit-btn");

// Initialize the game
function initializeGame() {
  loadQuestion();
  submitButton.addEventListener("click", handleQuestionSubmit);
}

// Load the current question and options
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.classList.add("option");
    optionElement.draggable = true;
    optionElement.innerText = option;
    optionElement.setAttribute("data-index", index);
    optionsElement.appendChild(optionElement);
  });

  feedbackElement.innerText = "";
}

// Handle submitting the current question
function handleQuestionSubmit() {
  const selectedOption = document.querySelector(".option.selected");

  if (selectedOption) {
    const selectedOptionIndex = parseInt(selectedOption.getAttribute("data-index"));
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.correctOption === currentQuestion.options[selectedOptionIndex]) {
      feedbackElement.innerText = "Correct!";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.innerText = "Incorrect!";
      feedbackElement.style.color = "red";
    }

    selectedOption.classList.remove("selected");
    selectedOption.removeAttribute("draggable");
    submitButton.disabled = true;

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
        submitButton.disabled = false;
      }, 1500);
    } else {
      setTimeout(() => {
        feedbackElement.innerText = "Game Over!";
        feedbackElement.style.color = "black";
        submitButton.style.display = "none";
      }, 1500);
    }
  } else {
    feedbackElement.innerText = "Please select an option.";
    feedbackElement.style.color = "red";
  }
}

// Add event listeners for option selection
optionsElement.addEventListener("click", event => {
  const selectedOption = event.target;
  if (selectedOption.classList.contains("option")) {
    const selectedOptionIndex = parseInt(selectedOption.getAttribute("data-index"));
    const options = optionsElement.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    selectedOption.classList.add("selected");
  }
});

// Initialize the game
initializeGame();
