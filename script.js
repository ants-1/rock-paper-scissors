function getComputerChoice() {
    let randomChoice = Math.round(Math.random() * 2);
    switch (randomChoice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSOR";

    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "ROCK") && (computerSelection == "ROCK")
        || (playerSelection == "SCISSOR") && (computerSelection == "SCISSOR")
        || (playerSelection == "PAPER") && (computerSelection == "PAPER")) {
        return "Draw";
    } else if ((playerSelection == "ROCK") && (computerSelection == "SCISSOR")
        || (playerSelection == "PAPER") && (computerSelection == "ROCK")
        || (playerSelection == "SCISSOR") && (computerSelection == "PAPER")) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection == "SCISSOR") && (computerSelection == "ROCK")
        || (playerSelection == "ROCK") && (computerSelection == "PAPER")
        || (playerSelection == "PAPER" && computerSelection == "SCISSOR")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        const playerChoice = prompt("Rock, Paper or Scissors").toUpperCase();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
    }
}

game();