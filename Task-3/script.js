const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpeg", "img6"];
let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("gallery-image").src = images[currentIndex];
}

 const quizData = [
      { question: "The sky is blue.", answer: "A" },
      { question: "2 + 2 equals 5.", answer: "B" },
      { question: "JavaScript is the same as Java.", answer: "B" },
      { question: "HTML stands for HyperText Markup Language.", answer: "A" }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const scoreEl = document.getElementById("quiz-score");
    const submitBtn = document.getElementById("submit-btn");

    function loadQuestion() {
      if (currentQuestion < quizData.length) {
        questionEl.textContent = quizData[currentQuestion].question;
      } else {
        questionEl.textContent = "All questions answered.";
        submitBtn.style.display = "inline-block";
      }
    }

    function submitAnswer(answer) {
      if (currentQuestion < quizData.length) {
        if (answer === quizData[currentQuestion].answer) {
          score++;
        }
        currentQuestion++;
        loadQuestion();
      }
    }

    function showScore() {
      questionEl.style.display = "none";
      document.querySelectorAll(".btn").forEach(btn => btn.style.display = "none");
      submitBtn.style.display = "none";
      scoreEl.textContent = `Your Score: ${score} out of ${quizData.length}`;
    }

    window.onload = loadQuestion;


function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-display").textContent =
        `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke-display").textContent =
        "Oops! Couldn't fetch a joke right now.";
    });
}