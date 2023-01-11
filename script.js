function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
};

const choices = [
    "rock", 
    "paper", 
    "scissors"
];

//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {      
    if (playerSelection == "rock" && computerSelection == "rock") {
        alert("It's a tie! You both chose rock.");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose! Paper beats rock!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win! Rock beats scissors!")
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        alert("It's a tie! You both chose paper.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lose! Scissors beats paper!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You win! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert("It's a tie! You both chose scissors.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lose! Rock beats scissors!");
    } else {
        alert("You win! Scissors beats paper!")
    }
}