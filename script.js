const choices = [
    "knight", 
    "princess", 
    "dragon"
];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
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

let knightDefeatsDragon = 
    "The knight defeats the dragon. During the grueling fight over the princess, the dragon's wings were clipped by the knight's axe, leading to its dramatic downfall...";
let princessDefeatsKnight = 
    "The princess defeats the knight. He was overcome by her beauty, and instantly falls... in love.";
let dragonDefeatsPrincess = 
    "The dragon defeats the princess. She attempted to climb out of the tower's window, only to be caught in the act by the dragon, releasing his fiery breath. He was quite heated, to say the least...";

function getWinnerOfRound(playerSelection, computerSelection) {
    if               // tie
    (playerSelection === computerSelection) {
        let resultsMessage = document.createTextNode("It's a tie! You both chose the " + playerSelection + ". Both get confused why they see another version of themselves in the flesh.");
        resetResultsMessage(resultsMessage);

    } else if       // loser
    (playerSelection == "knight" && computerSelection == "princess") {
        let resultsMessage = document.createTextNode("You lose! " + princessDefeatsKnight);
        resetResultsMessage(resultsMessage);
        computerScore++;
    } else if       // loser
    (playerSelection == "princess" && computerSelection == "dragon") {
        let resultsMessage = document.createTextNode("You lose! " + dragonDefeatsPrincess);
        resetResultsMessage(resultsMessage);
        computerScore++;
    } else if       // loser
    (playerSelection == "dragon" && computerSelection == "knight") {
        let resultsMessage = document.createTextNode("You lose! " + knightDefeatsDragon);
        resetResultsMessage(resultsMessage);
        computerScore++;
    
    } else if       // winner
    (playerSelection == "knight" && computerSelection == "dragon") {
        let resultsMessage = document.createTextNode("You win! " + knightDefeatsDragon);
        resetResultsMessage(resultsMessage);
        playerScore++;
    } else if       // winner
    (playerSelection == "princess" && computerSelection == "knight") {
        let resultsMessage = document.createTextNode("You win! " + princessDefeatsKnight);
        resetResultsMessage(resultsMessage);
        playerScore++;
    } else {        // winner
        let resultsMessage = document.createTextNode("You win! " + dragonDefeatsPrincess);
        resetResultsMessage(resultsMessage);
        playerScore++;
    }
};

const endGameMessageDiv = document.querySelector('.end-round-message');
const btns = document.querySelectorAll('button');
const disableButtons = () => {
    btns.disabled = true;
};

function getWinnerOfGame () {
    if (playerScore === 5) {
        endGameMessageDiv.textContent = `CONGRATULATIONS! You win the game! Please refresh the page to play again.`;
        btns.addEventListener('click', disableButtons);
    } else if (computerScore === 5) {
        endGameMessageDiv.textContent = `GAME OVER. You lose. Please refresh the page to play again.`;
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