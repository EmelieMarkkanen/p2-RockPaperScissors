const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
}
));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

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

function getResult() {
  if (computerChoice === playerChoice) {
    result = 'its a draw!';
  }
  if (computerChoice === 'rock' && playerChoice === "paper") {
    result = 'you win!';
  }
  if (computerChoice === 'rock' && playerChoice === "scissors") {
    result = 'you lost!';
  }
  if (computerChoice === 'rock' && playerChoice === "lizard") {
    result = 'you lost!';
  }
  if (computerChoice === 'rock' && playerChoice === "spock") {
    result = 'you win!';
  }
  if (computerChoice === 'paper' && playerChoice === "scissors") {
    result = 'you win!';
  }
  if (computerChoice === 'paper' && playerChoice === "rock") {
    result = 'you lose!';
  }
  if (computerChoice === 'paper' && playerChoice === "spock") {
    result = 'you lose!';
  }
  if (computerChoice === 'paper' && playerChoice === "lizard") {
    result = 'you win!';
  }
  if (computerChoice === 'scissors' && playerChoice === "rock") {
    result = 'you win!';
  }
  if (computerChoice === 'scissors' && playerChoice === "paper") {
    result = 'you lose!';
  }
  if (computerChoice === 'scissors' && playerChoice === "lizard") {
    result = 'you lose!';
  }
  if (computerChoice === 'scissors' && playerChoice === "spock") {
    result = 'you win!';
  }
  resultDisplay.innerHTML = result;
}