const score = document.querySelector(".score");
const pScore = document.createElement("h1");
const cScore = document.createElement("h1");

let playScore = 0;
let compS = 0;

score.append(pScore);
pScore.textContent = "Player Score: " + playScore;
score.append(cScore);
cScore.textContent = "Computer Score: " + compS;

const btns = document.querySelector(".btns");

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

btns.append(rock);
rock.textContent = "rock";
btns.append(paper);
paper.textContent = "paper";
btns.append(scissors);
scissors.textContent = "scissors";

randomNumber = () => {
  return Math.floor(Math.random() * 3);
};

getComputerChoice = () => {
  const choice = randomNumber();
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

playRound = (playerSelection, computerSelection = getComputerChoice()) => {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compS += 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compS += 1;
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playScore += 1;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compS += 1;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playScore += 1;
    return "You Win! Scissors beat Paper";
  }
};

scoreBoard = () => {};

rock.addEventListener("click", () => {
  console.log(playRound("rock"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
  pScore.textContent = "Player Score: " + playScore;
  cScore.textContent = "Computer Score: " + compS;
});

paper.addEventListener("click", () => {
  console.log(playRound("paper"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
  pScore.textContent = "Player Score: " + playScore;
  cScore.textContent = "Computer Score: " + compS;
});

scissors.addEventListener("click", () => {
  console.log(playRound("scissors"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
  pScore.textContent = "Player Score: " + playScore;
  cScore.textContent = "Computer Score: " + compS;
});
