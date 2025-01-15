function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check the answer and update feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
