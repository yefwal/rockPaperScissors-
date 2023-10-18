/* 

  Goal: connect btns to playerSelection

  - click btn
  - playerSelection takes btn that was clicked
  - playerSelection returns '(whatever btn) was clicked'

*/

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

rock.addEventListener("click", () => {
  console.log("rock");
});
paper.addEventListener("click", () => {
  console.log("paper");
});

scissors.addEventListener("click", () => {
  console.log("scissors");
});
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
  const newPs = playerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);

  if (newPs === computerSelection) {
    return "It's a tie";
  } else if (newPs === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (newPs === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (newPs === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beat Paper";
  } else if (newPs === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (newPs === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (newPs === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beat Paper";
  }
};

game = () => {};
