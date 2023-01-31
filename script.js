function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

const choices = [
    "rock", 
    "paper", 
    "scissors"
];

const body = document.getElementsByTagName('body');

function addElement(outcomeContent) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('outcome');
    newDiv.appendChild(outcomeContent);
    document.body.insertBefore(newDiv, body.lastElementChild);
}

function game(event) {
    let playerSelection = event.target.value;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
};

function playRound(playerSelection, computerSelection) {

    // Rock-Outcomes
    if (playerSelection == "rock" && computerSelection == "rock") {
        let outcomeContent = document.createTextNode("It's a tie! You both chose rock.");
        addElement(outcomeContent);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        let outcomeContent = document.createTextNode("You lose! Paper beats rock!");
        addElement(outcomeContent);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        let outcomeContent = document.createTextNode("You win! Rock beats scissors!");
        addElement(outcomeContent);

    // Paper-Outcomes
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        let outcomeContent = document.createTextNode("It's a tie! You both chose paper.");
        addElement(outcomeContent);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        let outcomeContent = document.createTextNode("You lose! Scissors beats paper!");
        addElement(outcomeContent);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        let outcomeContent = document.createTextNode("You win! Paper beats rock!");
        addElement(outcomeContent);

    // Scissors-Outcomes
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        let outcomeContent = document.createTextNode("It's a tie! You both chose scissors.");
        addElement(outcomeContent);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        let outcomeContent = document.createTextNode("You lose! Rock beats scissors!");
        addElement(outcomeContent);
    } else {
        let outcomeContent = document.createTextNode("You win! Scissors beats paper!");
        addElement(outcomeContent);
    }

};

const btns = document.querySelectorAll('button');

btns.forEach((button) => {
    button.addEventListener('click', game);
});