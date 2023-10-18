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

rock.addEventListener(
  "click",
  (playerSelection, computerSelection = getComputerChoice()) => {
    playerSelection = "rock";
    getComputerChoice();
    if (playerSelection === computerSelection) {
      console.log("It's a tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors");
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("You Lose! Scissors beat Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("You Win! Scissors beat Paper");
    }

    console.log(playerSelection);
    console.log(computerSelection);
  }
);

paper.addEventListener(
  "click",
  (playerSelection, computerSelection = getComputerChoice()) => {
    playerSelection = "paper";
    getComputerChoice();
    if (playerSelection === computerSelection) {
      console.log("It's a tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors");
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("You Lose! Scissors beat Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("You Win! Scissors beat Paper");
    }

    console.log(playerSelection);
    console.log(computerSelection);
  }
);

scissors.addEventListener(
  "click",
  (playerSelection, computerSelection = getComputerChoice()) => {
    playerSelection = "scissors";
    getComputerChoice();
    if (playerSelection === computerSelection) {
      console.log("It's a tie");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You Lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You Win! Rock beats Scissors");
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("You Lose! Scissors beat Paper");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("You Lose! Rock beats Scissors");
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("You Win! Scissors beat Paper");
    }

    console.log(playerSelection);
    console.log(computerSelection);
  }
);
