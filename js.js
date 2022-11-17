let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    humanScore += 1;
    if (humanScore == 5) {
      playAgain();
      document.getElementById("text").innerHTML = "Player won";
    }
  } else {
    computerScore += 1;
    if (computerScore == 5) {
      playAgain();
      document.getElementById("text").innerHTML = "Computer won";
    }
  }

  document.getElementById("human-score").innerHTML = humanScore;
  document.getElementById("computer-score").innerHTML = computerScore;
  return;
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});

function playAgain() {
  document.getElementById("play-again").style.display = "block";
}

function refreshPage() {
  window.location.reload();
}
