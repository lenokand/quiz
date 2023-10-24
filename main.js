const questions = [
    {
        question: "1What programming language is taught at Powercoders?",
        options: ["JavaScript", "Python", "Java", "C#"],
        correctAnswer: "JavaScript"
    },
    {
        question: "2How long does the Powercoders program last?",
        options: ["3 months", "6 months", "9 months", "1 year"],
        correctAnswer: "6 months"
    },
    {
        question: "3Which industry does Powercoders primarily focus on for job placement?",
        options: ["Finance", "Healthcare", "Tech", "Retail"],
        correctAnswer: "Tech"
    },
    {
        question: "4What is the main goal of Powercoders?",
        options: ["Teach cooking skills", "Teach coding skills", "Teach marketing skills", "Teach gardening skills"],
        correctAnswer: "Teach coding skills"
    },
    {
        question: "5In which country was Powercoders founded?",
        options: ["USA", "Germany", "Switzerland", "Japan"],
        correctAnswer: "Switzerland"
    }
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

  }

 shuffleArray(questions)
console.log(questions)
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options-list");
const feedbackText = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const messageText = document.getElementById("message-text");
const timerElement = document.getElementById("timer");




// let currentQuestionIndex = 0;
// let score = 0;



// let timer;
// let timeLeft = 60; // 1 minute in seconds

// function updateTimerDisplay() {
//     const minutes = Math.floor(timeLeft / 60);
//     const seconds = timeLeft % 60;
//     const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//     timerElement.textContent = formattedTime;
// }

// function startTimer() {
//     timer = setInterval(() => {
//         timeLeft--;
//         updateTimerDisplay();
//         if (timeLeft === 0) {
//             clearInterval(timer);
//             checkAnswer(-1); // Time's up, check with an invalid index
//         }
//     }, 1000);
// }

// function resetTimer() {
//     clearInterval(timer);
//     timeLeft = 60;
//     updateTimerDisplay();
// }

// function displayQuestion() {
//     resetTimer();

//     const currentQuestion = questions[currentQuestionIndex];
//     questionText.textContent = currentQuestion.question;
//     optionsList.innerHTML = "";
//     currentQuestion.options.forEach((option, index) => {
//         const li = document.createElement("li");
//         li.textContent = option;
//         li.classList.add("option");
//         li.addEventListener("click", () => checkAnswer(index));
//         optionsList.appendChild(li);
//     });
//     feedbackText.textContent = "Select an option and click 'Next' to continue.";
//     nextButton.style.display = "none";
//     startTimer();
// }

// function checkAnswer(selectedIndex) {
//     const currentQuestion = questions[currentQuestionIndex];
//     if (selectedIndex === -1) {
//         feedbackText.textContent = "Time's up! The correct answer is: " + currentQuestion.correctAnswer;
//     } else if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
//         feedbackText.textContent = "Correct!";
//         score++;
//     } else {
//         feedbackText.textContent = "Wrong. The correct answer is: " + currentQuestion.correctAnswer;
//     }
//     clearInterval(timer);
//     nextButton.style.display = "block";
//     optionsList.querySelectorAll(".option").forEach(option => option.removeEventListener("click", checkAnswer));
// }

// function displayResult() {
//     resultContainer.style.display = "block";
//     scoreText.textContent = `${score} / ${questions.length}`;
//     if (score === questions.length) {
//         messageText.textContent = "You are a genius!";
//     } else {
//         messageText.textContent = "You seem to have a bad day.";
//     }
// }

// nextButton.addEventListener("click", () => {
//     if (currentQuestionIndex < questions.length - 1) {
//         currentQuestionIndex++;
//         displayQuestion();
//     } else {
//         displayResult();
//     }
// });

// displayQuestion();
