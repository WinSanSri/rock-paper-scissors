
//get random choice from computer
function getComputerChoice() {

    //create array with available choices
    const choices = ['rock', 'paper', 'scissors'];

    //get random number from 0-2 (0 included)
    return choices[Math.floor(Math.random() * 3)];
}

//play one round
function playRound(playerSelection, computerSelection) {

    //convert to lowercase for easier check
    playerSelection = playerSelection.toLowerCase();

    //set userWinsRoud to false
    let userWinsRound = false;

    //display selections
    console.log('You: ' + playerSelection + ' | ' + 'Computer: ' + computerSelection);

    //user and computer selects same choice
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    }

    //user selected rocks
    if(playerSelection === 'rock') {
        if (computerSelection === 'scissors'){
            userWinsRound = true;
        }
    //user selected paper
    }else if(playerSelection === 'paper') {
        if (computerSelection === 'rock'){
            userWinsRound = true;
        }
    //user selected scissors
    }else if(playerSelection === 'scissors') {
        if (computerSelection === 'paper'){
            userWinsRound = true;

        }
    //invalid value
    }else {
        return 'invalid'
    }

    //return the result
    if (userWinsRound) {
        return 'You Win! ' + playerSelection +  ' beats ' + computerSelection + '.';
    }else {
        return 'You Lose! ' + computerSelection +  ' beats ' + playerSelection + '.';
    }
}
