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
  }
  else{
    switch(playerChoice)
  }
}
