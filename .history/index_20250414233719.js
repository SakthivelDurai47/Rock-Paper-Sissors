const choices = ["Rock", "Paper", "Scissor"];
const playerInfo = document.getElementById("playerInfo");
const computerInfo = document.getElementById("computerInfo");
const result = document.getElementById("result");
const scoreCom = document.getElementById("scoreCum");
const scorePlr = document.getElementById("scorePlr");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let results = "";
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    results = "It's a Tie";
  } else {
    switch (playerChoice) {
      case "Rock":
        results = computerChoice === "Scissor" ? "You Win!" : "You Lose!";
        break;
      case "Paper":
        results = computerChoice === "Rock" ? "You Win!" : "You Lose!";
        break;
      case "Scissor":
        results = computerChoice === "Paper" ? "You Win!" : "You Lose!";
        break;
    }
  }
  result.classList.remove("greenText", "redText");
  playerInfo.textContent = `Player: ${playerChoice}`;
  computerInfo.textContent = `Computer: ${computerChoice}`;
  result.textContent = results;
  result.classList.remove("shake");
  result.offsetWidth;
  result.classList.add("shake");

  if (results === "You Win!") {
    playerScore++;
    result.classList.add("greenText");
  } else if (results === "You Lose!") {
    computerScore++;
    result.classList.add("redText");
  }
  scoreCom.innerText = computerScore;
  scorePlr.innerText = playerScore;
}
function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}
