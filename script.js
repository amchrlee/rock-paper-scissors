const choices = [
    "rock", 
    "paper", 
    "scissors"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
};

function playRound(event) {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    getWinnerOfRound(playerSelection, computerSelection);
};  

const resultsMessageDiv = document.querySelector('.end-round-message');

function resetResultsMessage(resultsMessage) {
    resultsMessageDiv.innerHTML = '';
    resultsMessageDiv.appendChild(resultsMessage);
};

let playerScore = 0;
let computerScore = 0;

function updateScore() {
    const playerScoreDiv = document.querySelector('#player-score');
    const computerScoreDiv = document.querySelector('#computer-score');
    playerScoreDiv.textContent = `${playerScore}`;
    computerScoreDiv.textContent = `${computerScore}`;
};

function getWinnerOfRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {    // tie
        let resultsMessage = document.createTextNode("It's a tie! You both chose " + playerSelection + ".");
        resetResultsMessage(resultsMessage);

    } else if (     // loser
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "rock")) {
        let resultsMessage = document.createTextNode("You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + playerSelection + ".");
        resetResultsMessage(resultsMessage);
        computerScore++;
        
    } else {    // winner
        let resultsMessage = document.createTextNode("You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection + ".");
        resetResultsMessage(resultsMessage);
        playerScore++;
    }
};

const endGameMessageDiv = document.querySelector('.end-game-message');
const btns = document.querySelectorAll('button');
const disableButtons = () => {
    btns.disabled = true;
};

function getWinnerOfGame () {
    if (playerScore === 5) {
        endGameMessageDiv.textContent = `CONGRATULATIONS! You win the game! Please refresh the page to play again.`;
        btns.addEventListener('click', disableButtons);
    } else if (computerScore === 5) {
        endGameMessageDiv.textContent = `GAME OVER. You lose the game. Please refresh the page to play again.`;
        btns.addEventListener('click', disableButtons);
    }
};

btns.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (playerScore !== 5 && computerScore !== 5) {
            playRound(event);
            updateScore();
            getWinnerOfGame();
        };
    });
});