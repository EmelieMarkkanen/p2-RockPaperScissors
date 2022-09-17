const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerScore = document.getElementById("player-score")
let computerScore = document.getElementById("computer-score")
let playerChoice;
let computerChoice;
let result;


//Event listener

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
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

// Generate result for winner/loser

function getResult() {
  let win = "You win";
  let lose = "You lose";
  let draw = "It's a draw";

  if (computerChoice === "rock") {
    if (playerChoice === "paper" || playerChoice === "spock") {
      result = win;
    } else {
      result = lose;
    }
  }
  if (computerChoice === "paper") {
    if (playerChoice === "lizard" || playerChoice === "scissors") {
      result = win;
    } else {
      result = lose;
    }
  }

  if (computerChoice === "scissors") {
    if (playerChoice === "rock" || playerChoice === "spock") {
      result = win;
    } else {
      result = lose;
    }
  }

  if (computerChoice === "lizard") {
    if (playerChoice === "scissors" || playerChoice === "rock") {
      result = win;
    } else {
      result = lose;
    }
  }

  if (computerChoice === "spock") {
    if (playerChoice === "lizard" || playerChoice === "paper") {
      result = win;
    } else {
      result = lose;
    }
  }
  resultDisplay.innerHTML = result;
}