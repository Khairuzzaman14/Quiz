let currentQuestion = 0;
let score = 0;
let time = 10;
let intervalID;

let startButton = document.getElementById("Start");
let nextButton = document.getElementById("Next");
let scoreBox = document.getElementById("score");
let timerBox = document.getElementById("timer");
let questionBox = document.getElementById("question");
let resultBox = document.querySelector("#result");
let answerBox = document.querySelector("#answers");

const questions = [
  {
    question: "Which country won the first ever World Cup in 1930?",
    answers: ["Uruguay", "Brazil", "England", "France"],
    correct: "Uruguay",
  },
  {
    question:
      "With 260 goals, who is the Premier League's all-time top scorer?",
    answers: [
      "Alan Shearer",
      "Wayne Rooney",
      "Crisitano Ronaldo",
      "Thierry Henry",
    ],
    correct: "Alan Shearer",
  },
  {
    question:
      "Who scored the most goals in a single European Championship tournament?",
    answers: [
      "Michel Platini, Euro 84",
      "Cristiano Ronaldo, Euro 16",
      "Gerd Muller, Euro 72",
      "Kylian Mbappe, Euro 20",
    ],
    correct: "Michel Platini, Euro 84",
  },
  {
    question:
      "Which team has been runners-up the most times in the Champions League?",
    answers: ["AC Milan", "Real Madrid", "Juventus", "Bayern Munich"],
    correct: "Juventus",
  },
  {
    question: "Which English player has never won the Ballon d'Or",
    answers: [
      "Kevin Keegan",
      "David Beckham",
      "Michael Owen",
      "Bobby Charlton",
    ],
    correct: "David Beckham",
  },
  {
    question: "Who won the Champions League with three different clubs?",
    answers: [
      "Clarence Seedorf",
      "Cristiano Ronaldo",
      "Thiago Alcantara",
      "David Beckham",
    ],
    correct: "Clarence Seedorf",
  },
  {
    question: "The record number of World Cup goals is 16, scored by who?",
    answers: ["Ronaldo Nazario", "Pele", "Lionel Messi", "Miroslav Klose"],
    correct: "Miroslav Klose",
  },
  {
    question: "Who is the world's first £1 million footballer?",
    answers: [
      "Giuseppe Savoldi",
      "Johan Cruyff",
      "Trevor Francis",
      "Paolo Rossi",
    ],
    correct: "Giuseppe Savoldi",
  },
  {
    question: "Who is the most capped Germany international of all time?",
    answers: [
      "Miroslav Klose",
      "Lothar Matthaus",
      "Philipp Lahm",
      "Manuel Neuer",
    ],
    correct: "Lothar Matthaus",
  },
  {
    question: "Which player has never won the Champions League?",
    answers: [
      "David Beckham",
      "Thierry Henry",
      "Ronaldo Nazario",
      "Andriy Shevchenko",
    ],
    correct: "Ronaldo Nazario",
  },
  {
    question: "Romario played for which Dutch club before moving to Barcelona?",
    answers: ["Ajax", "PSV Eindhoven", "Feyenoord", "FC Groningen"],
    correct: "PSV Eindhoven",
  },
  {
    question: "Jaap Stam managed which English club?",
    answers: ["Reading FC", "West Ham United", "Norwich City", "Aston Villa"],
    correct: "Reading FC",
  },
  {
    question:
      "Which nation won UEFA Euro 1992 despite not initially qualifying?",
    answers: ["Croatia", "Italy", "Denmark", "England"],
    correct: "Denmark",
  },
  {
    question:
      "Which player holds the record for the most Premier League appearances?",
    answers: ["Ryan Giggs", "Frank Lampard", "James Milner", "Gareth Barry"],
    correct: "Gareth Barry",
  },
  {
    question: "Who is the Bundesliga's all-time top goalscorer?",
    answers: [
      "Mario Gomez",
      "Robert Lewandowski",
      "Gerd Muller",
      "Miroslav Klose",
    ],
    correct: "Gerd Muller",
  },
  {
    question: "Tranbzonspor are a football club based in which country?",
    answers: ["Italy", "Turkey", "England", "France"],
    correct: "Turkey",
  },
  {
    question: "What is Juventus' nickname?",
    answers: ["Bianconeri", "Rossoneri", "Nerazzurri", "Giallorossi"],
    correct: "Bianconeri",
  },
  {
    question: "Which nation has won the African Cup of Nations the most?",
    answers: ["Ivory Coast", "Cameroon", "Ghana", "Egypt"],
    correct: "Egypt",
  },
  {
    question: "Who is the most capped England player with 125 appearances?",
    answers: [
      "Wayne Rooney",
      "Peter Shilton",
      "David Beckham",
      "Bobby Charlton",
    ],
    correct: "Peter Shilton",
  },
  {
    question: "In what year was Maradona's 'Hand of God' incident?",
    answers: ["1990", "1982", "1978", "1986"],
    correct: "1986",
  },
  {
    question: "Which country was runners-up at the 1974 World Cup?",
    answers: ["Brazil", "Argentina", "Germany", "Netherlands"],
    correct: "Netherlands",
  },
  {
    question: "How many times have North Korea qualified for the World Cup?",
    answers: ["0", "1", "2", "3"],
    correct: "2",
  },
  {
    question: "Who is Italy's all time top goalscorer?",
    answers: ["Gigi Riva", "Roberto Baggio", "Filippo Inzaghi", "Paolo Rossi"],
    correct: "Gigi Riva",
  },
  {
    question:
      "Which country has been runners-up the most times in Copa America?",
    answers: ["Brazil", "Chile", "Uruguay", "Argentina"],
    correct: "Argentina",
  },
  {
    question: "Which player did not win 3 or more ballon d'Or?",
    answers: [
      "Marco van Basten",
      "Michel Platini",
      "Ronaldo Nazario",
      "Johan Cruyff",
    ],
    correct: "Ronaldo Nazario",
  },
  {
    question: "How many goals did Cristiano Ronaldo scored for Real Madrid?",
    answers: ["500", "450", "400", "350"],
    correct: "450",
  },
  {
    question: "Who is the only african player to win the ballon d'Or?",
    answers: ["Mohamed Salah", "Didier Drogba", "Samuel Eto'o", "George Weah"],
    correct: "George Weah",
  },
  {
    question: "How many Premier League titles did Arsene Wenger win?",
    answers: ["5", "4", "3", "2"],
    correct: "3",
  },
  {
    question:
      "Who has kept the most consecutive clean sheets in Champions League?",
    answers: [
      "Jens Lehmann",
      "Iker Casillas",
      "Gianluigi Buffon",
      "Thibaut Courtois",
    ],
    correct: "Jens Lehmann",
  },
  {
    question: "Which club is the only French club to win the Champions League?",
    answers: ["Monaco", "PSG", "Marseille", "Lyon"],
    correct: "Marseille",
  },
];

let randomQns = questions.sort(() => Math.random() - 0.5);

window.onload = (event) => {
  scoreBox.style.visibility = "hidden";
  resultBox.style.visibility = "hidden";
  timerBox.style.visibility = "hidden";
  nextButton.style.visibility = "hidden";
  questionBox.style.visibility = "hidden";
  document.querySelector("#answers").style.visibility = "hidden";
};

function updateScore() {
  scoreBox.innerHTML = score + "/30";
}

function startQuiz() {
  console.log("Started");
  questionBox.innerHTML = randomQns[currentQuestion].question;
  ab1.innerHTML = randomQns[currentQuestion].answers[0];
  ab2.innerHTML = randomQns[currentQuestion].answers[1];
  ab3.innerHTML = randomQns[currentQuestion].answers[2];
  ab4.innerHTML = randomQns[currentQuestion].answers[3];

  updateScore();

  startCountdown();

  scoreBox.style.visibility = "visible";
  timerBox.style.visibility = "visible";
  nextButton.style.visibility = "visible";
  questionBox.style.visibility = "visible";
  document.querySelector("#answers").style.visibility = "visible";
  startButton.style.visibility = "hidden";

  nextButton.innerHTML = "Skip";
}

function nextQn() {
  console.log("Next question");
  currentQuestion++;
  if (currentQuestion == questions.length) {
    resultBox.style.visibility = "visible";
    nextButton.style.visibility = "hidden";
    scoreBox.style.visibility = "hidden";
    timerBox.style.visibility = "hidden";
    questionBox.style.visibility = "hidden";
    document.querySelector("#answers").style.visibility = "hidden";
    resultBox.innerHTML = `Your score is ${score} points`;
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

  stopCountdown();
  resetCountdown();
}

function startCountdown() {
  if (!intervalID) {
    intervalID = setInterval(countdownToZero, 1000);
  }
}

function countdownToZero() {
  if (time === 0) {
    stopCountdown();
    ab1.disabled = true;
    ab2.disabled = true;
    ab3.disabled = true;
    ab4.disabled = true;
  }
  timerBox.innerHTML = time;
  time--;
}

function stopCountdown() {
  clearInterval(intervalID);
  intervalID = null;
}

function resetCountdown() {
  stopCountdown();
  time = 10;
  startCountdown();
}
startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQn);

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

  stopCountdown();
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

  stopCountdown();
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

  stopCountdown();
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

  stopCountdown();
});
