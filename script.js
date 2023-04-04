let currentQuestion = 0;

// Start button
let startButton = document.getElementById("Start");
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("Started");
  questionBox.innerHTML = randomQns[currentQuestion].question;
  ab1.innerHTML = randomQns[currentQuestion].answers[0];
  ab2.innerHTML = randomQns[currentQuestion].answers[1];
  ab3.innerHTML = randomQns[currentQuestion].answers[2];
  ab4.innerHTML = randomQns[currentQuestion].answers[3];

  let score = 0;
  updateScore();

  let myInterval = setInterval(updateCountdown, 1000);
  function updateCountdown() {
    timerBox.innerHTML = time;
    time--;
    if (time < 0) {
      clearInterval(myInterval);
      clearTimeout(myInterval);
      time = 0;
      ab1.disabled = true;
      ab2.disabled = true;
      ab3.disabled = true;
      ab4.disabled = true;
    }
  }

  scoreBox.style.visibility = "visible";
  timerBox.style.visibility = "visible";
  nextButton.style.visibility = "visible";
  questionBox.style.visibility = "visible";
  document.querySelector("#answers").style.visibility = "visible";
  startButton.style.visibility = "hidden";

  nextButton.innerHTML = "Skip";
}

// Next button
let nextButton = document.getElementById("Next");
nextButton.addEventListener("click", nextQn);
function nextQn() {
  console.log("Next question");
  currentQuestion++;
  if (currentQuestion == questions.length) {
    nextButton.style.visibility = "hidden";
    return;
  }
  questionBox.innerHTML = randomQns[currentQuestion].question;
  ab1.innerHTML = randomQns[currentQuestion].answers[0];
  ab2.innerHTML = randomQns[currentQuestion].answers[1];
  ab3.innerHTML = randomQns[currentQuestion].answers[2];
  ab4.innerHTML = randomQns[currentQuestion].answers[3];

  ab1.style.background = 0;
  ab2.style.background = 0;
  ab3.style.background = 0;
  ab4.style.background = 0;

  ab1.disabled = false;
  ab2.disabled = false;
  ab3.disabled = false;
  ab4.disabled = false;
  // let time = 10;
  // updateCountdown();

  nextButton.innerHTML = "Skip";

  let time = 10;
  let myInterval = setInterval(updateCountdown, 1000);
  function updateCountdown() {
    timerBox.innerHTML = time;
    time--;
    if (time < 0) {
      clearInterval(myInterval);
      clearTimeout(myInterval);
      time = 0;
      ab1.disabled = true;
      ab2.disabled = true;
      ab3.disabled = true;
      ab4.disabled = true;
    }
  }
}

ab1.addEventListener("click", function (e) {
  if (e.target.innerHTML == randomQns[currentQuestion].correct) {
    score++;
    updateScore();
    e.target.style.background = "LawnGreen";
  } else {
    e.target.style.background = "LightSalmon";
  }

  isDisabled = false;
  ab2.disabled = true;
  ab3.disabled = true;
  ab4.disabled = true;

  if (ab2.innerHTML == randomQns[currentQuestion].correct) {
    ab2.style.background = "LawnGreen";
  }
  if (ab3.innerHTML == randomQns[currentQuestion].correct) {
    ab3.style.background = "LawnGreen";
  }
  if (ab4.innerHTML == randomQns[currentQuestion].correct) {
    ab4.style.background = "LawnGreen";
  }

  nextButton.innerHTML = "Next";
});

ab2.addEventListener("click", function (e) {
  if (e.target.innerHTML == randomQns[currentQuestion].correct) {
    score++;
    updateScore();
    e.target.style.background = "LawnGreen";
  } else {
    e.target.style.background = "LightSalmon";
  }
  isDisabled = false;
  ab1.disabled = true;
  ab3.disabled = true;
  ab4.disabled = true;

  if (ab1.innerHTML == randomQns[currentQuestion].correct) {
    ab1.style.background = "LawnGreen";
  }
  if (ab3.innerHTML == randomQns[currentQuestion].correct) {
    ab3.style.background = "LawnGreen";
  }
  if (ab4.innerHTML == randomQns[currentQuestion].correct) {
    ab4.style.background = "LawnGreen";
  }

  nextButton.innerHTML = "Next";
});

ab3.addEventListener("click", function (e) {
  if (e.target.innerHTML == randomQns[currentQuestion].correct) {
    score++;
    updateScore();
    e.target.style.background = "LawnGreen";
  } else {
    e.target.style.background = "LightSalmon";
  }
  isDisabled = false;
  ab1.disabled = true;
  ab2.disabled = true;
  ab4.disabled = true;

  if (ab1.innerHTML == randomQns[currentQuestion].correct) {
    ab1.style.background = "LawnGreen";
  }
  if (ab2.innerHTML == randomQns[currentQuestion].correct) {
    ab2.style.background = "LawnGreen";
  }
  if (ab4.innerHTML == randomQns[currentQuestion].correct) {
    ab4.style.background = "LawnGreen";
  }

  nextButton.innerHTML = "Next";
});

ab4.addEventListener("click", function (e) {
  if (e.target.innerHTML == randomQns[currentQuestion].correct) {
    score++;
    updateScore();
    e.target.style.background = "LawnGreen";
  } else {
    e.target.style.background = "LightSalmon";
  }
  isDisabled = false;
  ab1.disabled = true;
  ab2.disabled = true;
  ab3.disabled = true;

  if (ab1.innerHTML == randomQns[currentQuestion].correct) {
    ab1.style.background = "LawnGreen";
  }
  if (ab2.innerHTML == randomQns[currentQuestion].correct) {
    ab1.style.background = "LawnGreen";
  }
  if (ab3.innerHTML == randomQns[currentQuestion].correct) {
    ab1.style.background = "LawnGreen";
  }

  nextButton.innerHTML = "Next";

  // function checkCorrect(button, correct)

  // button.innerHTML == correct
});

// answers.forEach((element) => {
//   if (element.innerHTML == randomQns[currentQuestion].correct) {

//   }
// });

// Score
let score = 0;
let scoreBox = document.getElementById("score");
function updateScore() {
  scoreBox.innerHTML = score + "/30";
}

// Timer;
let time = 10;
let timerBox = document.getElementById("timer");

// Questions
let questionBox = document.getElementById("question");

const questions = [
  {
    question: "What is 1+1?",
    answers: ["2", "3", "4", "5"],
    correct: "2",
  },
  {
    question: "What is 3+3?",
    answers: ["2", "3", "5", "6"],
    correct: "6",
  },
  {
    question: "What is 5+5?",
    answers: ["7", "10", "5", "6"],
    correct: "10",
  },
  {
    question: "What is 5+5?",
    answers: ["7", "10", "5", "6"],
    correct: "10",
  },
  {
    question: "What is 5+5?",
    answers: ["7", "10", "5", "6"],
    correct: "10",
  },
  {
    question: "What is 5+5?",
    answers: ["7", "10", "5", "6"],
    correct: "10",
  },
  {
    question: "What is 5+5?",
    answers: ["7", "10", "5", "6"],
    correct: "10",
  },
];

let randomQns = questions.sort(() => Math.random() - 0.5);

window.onload = (event) => {
  scoreBox.style.visibility = "hidden";
  timerBox.style.visibility = "hidden";
  nextButton.style.visibility = "hidden";
  questionBox.style.visibility = "hidden";
  document.querySelector("#answers").style.visibility = "hidden";
};
