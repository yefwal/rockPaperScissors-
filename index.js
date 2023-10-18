const score = document.querySelector(".score");

let playScore = 0;
let compS = 0;

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
    console.log("Computer Score: " + (compS += 1));
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player Score: " + (playScore += 1));
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer Score: " + (compS += 1));
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player Score: " + (playScore += 1));
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer Score: " + (compS += 1));
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player Score: " + (playScore += 1));
    return "You Win! Scissors beat Paper";
  }
};

rock.addEventListener("click", () => {
  console.log(playRound("rock"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
});

paper.addEventListener("click", () => {
  console.log(playRound("paper"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
});

scissors.addEventListener("click", () => {
  console.log(playRound("scissors"));
  if (playScore === 5) {
    console.log("Player Wins the Match!");
  } else if (compS === 5) {
    console.log("Computer Wins the Match!");
  }
});
