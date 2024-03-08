playGame(5);

function playGame(n) {
    for (let i = 0; i < n; i++) {
        const playerSelection = prompt("What will you play: ").toUpperCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch (randomChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    return "You tie! Rock ties Rock";
                case "PAPER":
                    return "You lose! Paper beats Rock";
                case "SCISSORS":
                    return "You win! Rock beats Scissors";
            }
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    return "You win! Paper beats Rock";
                case "PAPER":
                    return "You tie! Paper ties Paper";
                case "SCISSORS":
                    return "You lose! Scissors beats Paper";
            }
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return "You lose! Rock beats Scissors";
                case "PAPER":
                    return "You win! Scissors beats Paper";
                case "SCISSORS":
                    return "You tie! Scissors tie Scissors";
            }
    }
}