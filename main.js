const questions = [
    {
        question: "How do you create a new directory in CLI?",
        options: ["mkdir", "rmdir", "touch", "code"],
        correctAnswer: "mkdir"
    },
    {
        question: "Which is an inline level element in HTML?",
        options: ["article", "fieldset", "aside", "a"],
        correctAnswer: "a"
    },
    {
        question: "Which one is NOt a CSS measureing unit?",
        options: ["pt", "em", "px", "cm"],
        correctAnswer: "cm"
    },
    {
        question: "What is consider as a building block of programming?",
        options: ["Data type", "Variables", "functions", "all of them"],
        correctAnswer: "all of them"
    },
    {
        question: "Which is an example of loops in JavaScript?",
        options: ["if else", "switch", "ternary condition", "while"],
        correctAnswer: "while"
    }
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

  }

 shuffleArray(questions)

 let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question-text").textContent = currentQuestion.question;

        const optionsList = document.getElementById("options-list");
        optionsList.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.classList.add("option");
            li.addEventListener("click", () => checkAnswer(index, li));
            optionsList.appendChild(li);
        });

        document.getElementById("feedback-text").textContent = "Select an option and click 'Next' to continue";
        document.getElementById("next-button").disabled = true;
    }

    function checkAnswer(selectedIndex, li) {
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackText = document.getElementById("feedback-text");

        
         if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
            li.style.background = "green";
    
            feedbackText.textContent = "Correct!";
            
            score++;
        } else {
            li.style.background = "red";
       
            feedbackText.textContent = `Wrong. The correct answer is: ${currentQuestion.correctAnswer}`;
        }

        document.getElementById("next-button").disabled = false;
        document.querySelectorAll(".option").forEach(option => option.removeEventListener("click", checkAnswer));
    }

    document.getElementById("next-button").addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            displayResult();
        }
    });

    function displayResult() {
        const resultContainer = document.getElementById("result-container");
        resultContainer.style.display = "block";

        document.getElementById("score-text").textContent = `${score} / ${questions.length}`;

        const messageText = document.getElementById("message-text");
        messageText.textContent = score === questions.length ? "You are a genius!" : "You seem to have had a bad day. :(";
    }

    displayQuestion();
;
