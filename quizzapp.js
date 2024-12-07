// script.js
const questions = [
  {
    question: "What is the smallest planet in our solar system?",
    options: ["Mercury", "Mars", "Venus", "Earth"],
    correct: 0
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Thailand", "South Korea"],
    correct: 1
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correct: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Rembrandt"],
    correct: 2
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correct: 1
  }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreElement = document.getElementById("score");
  const feedbackElement = document.getElementById("feedback");
  const retryButton = document.getElementById("retry-btn");
  
  function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
      optionsElement.innerHTML = "";
      currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.addEventListener("click", () => handleAnswer(index));
        optionsElement.appendChild(li);
      });
      nextButton.style.display = "none";
    } else {
      showResult();
    }
  }
  
  function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
    nextButton.style.display = "block";
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    
    resultContainer.style.display = "block";
    scoreElement.innerText = score + " / " + questions.length;
    if (score === questions.length) {
      feedbackElement.innerText = "Congratulations! Perfect Score!";
    } else if (score >= questions.length / 2) {
      feedbackElement.innerText = "Good Job! You did well!";
    } else {
      feedbackElement.innerText = "Better luck next time!";
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
  }
  
  function retryQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = "none";
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", nextQuestion);
  retryButton.addEventListener("click", retryQuiz);
  
  loadQuestion();