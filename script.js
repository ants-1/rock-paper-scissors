const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const roundResultDiv = document.getElementById("round-result");
const gameResultDiv = document.getElementById("game-result");
const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");
const roundNumSpan = document.getElementById("round-num");
let playAgainBtn = document.querySelector(".hidden");
let scoreboard = document.querySelector(".scoreboard");
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

rockBtn.addEventListener("click", () => {
    playerChoice = getPlayerChoice(0);
    game();
});

paperBtn.addEventListener("click", () => {
    playerChoice = getPlayerChoice(1);
    game();
});

scissorBtn.addEventListener("click", () => {
    playerChoice = getPlayerChoice(2);
    game();
});

playAgainBtn.addEventListener("click", () => {
    reset();
})

function getComputerChoice() {
    let randomChoice = Math.round(Math.random() * 2);
    switch (randomChoice) {
        case 0:
            return "🪨";
        case 1:
            return "📜";
        case 2:
            return "✂️";
    }
}

function getPlayerChoice(choice) {
    switch (choice) {
        case 0:
            return "🪨";
        case 1:
            return "📜";
        case 2:
            return "✂️";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "🪨") && (computerSelection == "🪨")
        || (playerSelection == "✂️") && (computerSelection == "✂️")
        || (playerSelection == "📜") && (computerSelection == "📜")) {
        roundResultDiv.textContent = "Draw";
        scoreboard.style.backgroundColor = "#393E46";
    } else if ((playerSelection == "🪨") && (computerSelection == "✂️")
        || (playerSelection == "📜") && (computerSelection == "🪨")
        || (playerSelection == "✂️") && (computerSelection == "📜")) {
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
        roundResultDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        scoreboard.style.backgroundColor = "#00ADB5";
    } else if ((playerSelection == "✂️") && (computerSelection == "🪨")
        || (playerSelection == "🪨") && (computerSelection == "📜")
        || (playerSelection == "📜" && computerSelection == "✂️")) {
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
        roundResultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        scoreboard.style.backgroundColor = "#E96479";
    }
    roundNum += 1
    roundNumSpan.textContent = roundNum;
}

function game() { 
    if (playerScore == 4) {
        gameResultDiv.textContent = "Player Wins!";
        playerScoreDiv.textContent = 5;
        playAgainBtn.style.display = "block";
    } else if (computerScore == 4) {
        gameResultDiv.textContent = "Computer Wins!";
        computerScoreDiv.textContent = 5;
        playAgainBtn.style.display = "block";
    } else {
        playRound(playerChoice, getComputerChoice());
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
    roundNumSpan.textContent = roundNum;
    gameResultDiv.textContent = "Pick";
    roundResultDiv.textContent = "First to score 5 points wins!";
    scoreboard.style.backgroundColor = "#393E46";
    playAgainBtn.style.display = "none";
}

