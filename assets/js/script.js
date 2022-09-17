const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
let playerChoice;
let computerChoice;
let result;

//Event listener

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
  updateScore();
}
));

// Generate random computer choice

function generateComputerChoice() {
  const computerPossibleChoices = [
    "rock","paper","scissors","lizard","spock",
  ];
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = computerPossibleChoices[randomNumber];

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  if (randomNumber === 4) {
    computerChoice = "lizard";
  }
  if (randomNumber === 5) {
    computerChoice = "spock";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Generate result for winner/loser and update score

function getResult() {
  let win = "You win";
  let lose = "You lose";
  let draw = "It's a draw";

  if (computerChoice === "rock") {
    if (playerChoice === "paper" || playerChoice === "spock") {
      result = win;
      playerScore();
    } else {
      result = lose;
      computerScore();
    }
  }

  if (computerChoice === "paper") {
    if (playerChoice === "lizard" || playerChoice === "scissors") {
      result = win;
      playerScore();
    } else {
      result = lose;
      computerScore();
    }
  }

  if (computerChoice === "scissors") {
    if (playerChoice === "rock" || playerChoice === "spock") {
      result = win;
      playerScore();
    } else {
      result = lose;
      computerScore();
    }
  }

  if (computerChoice === "lizard") {
    if (playerChoice === "scissors" || playerChoice === "rock") {
      result = win;
      playerScore();
    } else {
      result = lose;
      computerScore();
    }
  }

  if (computerChoice === "spock") {
    if (playerChoice === "lizard" || playerChoice === "paper") {
      result = win;
      playerScore();
    } else {
      result = lose;
      computerScore();
    }
  }
  resultDisplay.innerHTML = result;
}

function playerScore() {
  let yourScore = parseInt(document.getElementById("player-score").innerText);
  document.getElementById("player-score").innerText = ++yourScore;
}
function computerScore() {
  let yourScore = parseInt(document.getElementById("computer-score").innerText);
  document.getElementById("computer-score").innerText = ++yourScore;
}
function drawScore() {
  let yourScore = parseInt(document.getElementById("draw-score").innerText);
  document.getElementById("draw-score").innerText = ++yourScore;
}