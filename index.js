$(document).ready(function() {
  // Enable draggable functionality for options
  $(".option").draggable({
    revert: "invalid"
  });

  // Enable droppable functionality for question
  $(".question").droppable({
    accept: ".option",
    drop: function(event, ui) {
      var selectedOption = ui.draggable;
      var selectedText = selectedOption.text();
      var isCorrect = checkAnswer(selectedText);

      if (isCorrect) {
        animateCorrectOption();
      } else {
        // Provide visual feedback for incorrect answer
        selectedOption.effect("shake");
      }
    }
  });

  // "Next" button click event
  $(".next-btn button").on("click", function() {
    // Load the next set of questions
    loadNextQuestion();
  });

  // Function to check if the selected option is correct or incorrect
  function checkAnswer(selectedText) {
    // Implement your logic to check the answer here
    // Return true if correct, false otherwise
    return selectedText === "Paris";
  }

  // Function to animate the correct option and change the central image
  function animateCorrectOption() {
    // Add animation to the central image container
    var animationContainer = $("#animationContainer");
    animationContainer.addClass("animate");

    // Change the central image after a delay
    setTimeout(function() {
      animationContainer.html("<img src='animation.gif' alt='Animation'>");
    }, 1000);
  }

  // Function to load the next question and reset the game state
  function loadNextQuestion() {
    // Implement the logic to load the next question and reset the game state here
    // Reset the central image and options
    var animationContainer = $("#animationContainer");
    animationContainer.removeClass("animate");
    animationContainer.html("");

    $(".option").css("top", "0").css("left", "0");
  }
});
