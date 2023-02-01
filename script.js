const choices = [
    "rock", 
    "paper", 
    "scissors"
];
const resultsMessageDiv = document.querySelector('.message');

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};    

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

function game(event) {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};    

function clearResultsMessage() {
    resultsMessageDiv.innerHTML = '';
}

function addResultsMessage(resultsMessage) {
    resultsMessageDiv.appendChild(resultsMessage);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {    // tie
        let resultsMessage = document.createTextNode("It's a tie! You both chose " + playerSelection + ".");
        clearResultsMessage();
        addResultsMessage(resultsMessage);
    } else if (     // loser
        (playerSelection == "rock" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "rock")) {
        let resultsMessage = document.createTextNode("You lose! " + capitalizeFirstLetter(computerSelection) + " beats " + playerSelection + ".");
        clearResultsMessage();
        addResultsMessage(resultsMessage);
    } else {    // winner
        let resultsMessage = document.createTextNode("You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection + ".");
        clearResultsMessage();
        addResultsMessage(resultsMessage);
    }
};

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', game);
});