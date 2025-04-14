const choices = ["Rock", "Paper", "Scissor"];
const playerInfo = document.getElementById("playerInfo");
const computerInfo = document.getElementById("computerInfo");
const result = document.getElementById("result");
const scoreCom = document.getElementById("scoreCum");
const scorePlr = document.getElementById("scorePlr");

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
  playerInfo.textContent = `Player: ${playerChoice}`;
  computerInfo.textContent = `Computer: ${computerChoice}`;
  result.textContent = results;
  if (result === "You Win!") {
    scoreCom++;
    result.classList.add("greenText");
  } else if (result === "You Lose!") {
    scoreCom++;
  }
  score;
}
