const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEAFALT_CHOISE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_PC_WINS = 'PC_WINS';

let gameisRunning = false;

const playerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?,`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEAFALT_CHOISE} for you`);
    return;
  }
  return selection
}

const getComputerChoice = function () {
  const randeomValue = Math.random();
  if (randeomValue < 0.34) {
    return ROCK;
  } else if (randeomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEAFALT_CHOISE) =>
  cChoice === pChoice ?
  RESULT_DRAW :
  (cChoice === ROCK && pChoice === PAPER) ||
  (cChoice === PAPER && pChoice === SCISSORS) ||
  (cChoice === SCISSORS && pChoice === ROCK) ?
  RESULT_PC_WINS :
  RESULT_PC_WINS;

// if (cChoice === pChoice) {
//   return RESULT_DRAW
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return RESULT_PLAYER_WINS;
// } else {
//   return RESULT_PC_WINS;
// }


startGameBtn.addEventListener('click', () => {
  if (gameisRunning) {
    return;
  }
  gameisRunning = true;
  console.log('Game is starting...');
  const playerSelection = playerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, playerSelection);
  }

  let message = `You picked ${playerSelection || DEAFALT_CHOISE}, computer picked ${computerChoice}, `
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.'
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'you won!'
  } else {
    message = message + 'you lost!'
  }
  alert(message);
  gameisRunning = false
});  