const selections = document.querySelector("#button-container");
const gameResults = document.querySelector("#game-results");
const roundResults = document.querySelector("#round-results");
let numberPlayerWins = 0;
let numberComputerWins = 0;

selections.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent.toUpperCase();
    const computerSelection = getComputerChoice();
    
    roundResults.textContent = playRound(playerSelection, computerSelection);
    gameResults.textContent = `Player Wins: ${numberPlayerWins}     Computer Wins: ${numberComputerWins}`;

    if (numberComputerWins >= 5 || numberPlayerWins >= 5) {
        gameResults.textContent = (numberComputerWins >= 5) ?
                            `Computer Wins!` :
                            `You Win!`;
    }
});

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
                    numberComputerWins++;
                    return "You lose! Paper beats Rock";
                case "SCISSORS":
                    numberPlayerWins++;
                    return "You win! Rock beats Scissors";
            }
            break;
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    numberPlayerWins++;
                    return "You win! Paper beats Rock";
                case "PAPER":
                    return "You tie! Paper ties Paper";
                case "SCISSORS":
                    numberComputerWins++;
                    return "You lose! Scissors beats Paper";
            }
            break;
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    numberComputerWins++;
                    return "You lose! Rock beats Scissors";
                case "PAPER":
                    numberPlayerWins++;
                    return "You win! Scissors beats Paper";
                case "SCISSORS":
                    return "You tie! Scissors tie Scissors";
            }
            break;
    }
}