
//get random choice from computer
function getComputerChoice() {

    //create array with available choices
    const choices = ['rock', 'paper', 'scissors'];

    //get random number from 0-2 (0 included)
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    //convert player's choice to lowercase for easier check
    return playerSelection.toLowerCase() + ' vs. ' + getComputerChoice();
    
}

