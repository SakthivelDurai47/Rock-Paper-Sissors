const choices = ["Rock", "Paper", "Scissor"];
const playerInfo = document.getElementById("playerInfo");
const computerInfo = document.getElementById("computerInfo");
const result = document.getElementById("result");
const scoreCom = document.getElementById("scoreCum");
const scorePlr = document.getElementById("scorePlr");

function playGame(playerChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  let results = "";

  if (playerChoice === computerChoice) {
    result = "It's a Tie";
  } else {
    switch (playerChoice) {
      case "Rock":
        results = computerChoice === "Scissor" ? "You Win!" : "You Lose!";
        break;
      case "Paper":
        results = computerChoice === "Rock" ? "You Win!" : "You Lose!";
        break;
      case "Scissor":
        results = computerChoice === "Paper" ? "You Win!" : "You Lose";
    }
  }
}
