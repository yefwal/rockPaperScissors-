const getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let game = (playerSelection, computerSelection = getComputerChoice()) => {
  let newPS = playerSelection.toLowerCase();
  let newCS = getComputerChoice();

  console.log(newPS);
  console.log(newCS);

  if (newPS === "rock" && newCS === "scissors") {
    console.log("You Win! Rock beats Scissors");
  } else if (newPS === "rock" && newCS === "paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (newPS === "paper" && newCS === "rock") {
    console.log("You Win!");
  } else if (newPS === "paper" && newCS === "scissors") {
    console.log("You lose");
  } else if (newPS === "scissors" && newCS === "rock") {
    console.log("You lose");
  } else if (newPS === "scissors" && newCS === "rock") {
    console.log("You lose");
  } else if (newPS === "scissors" && newCS === "paper") {
    console.log("You Win!");
  } else {
    console.log("Its a tie");
  }
};

game("Scissors");
