const selectRock = document.querySelector('.rock');
const selectPaper = document.querySelector('.paper');
const selectScissors = document.querySelector('.scissors');
const showRounds = document.querySelector('.rounds p');
const showUserScore = document.querySelector('.user-score p');
const showComputerScore = document.querySelector('.computer-score p');
const showWinner = document.querySelector('.winner p');
const showMsg = document.querySelector('.msg');
const resetBtn = document.querySelector('.reset');

selectRock.addEventListener('click', function() {
    game('rock');
});

selectPaper.addEventListener('click', function() {
    game('paper');
});

selectScissors.addEventListener('click', function() {
    game('scissors');
});

//reset game when button is clicked
resetBtn.addEventListener('click', function() {
    showRounds.innerHTML = "0";
    showUserScore.innerHTML = "0";
    showComputerScore.innerHTML = "0";
    showWinner.innerHTML = "";
    showMsg.innerHTML = "";
});

function game(userSelection) {
    //start rounds at 0
    let rounds = 0;

    //start scores at 0
    let userScore = 0;
    let computerScore = 0;

    //users selection
    const playerSelection = userSelection;
    
    //on round 5 get final score
    if (parseInt(showRounds.innerHTML) >= 5) {

        userScore = parseInt(showUserScore.innerHTML);
        computerScore = parseInt(showComputerScore.innerHTML);
        
        if(userScore === computerScore) {
            showWinner.innerHTML = 'It\'s a tie!';
        }else if(userScore > computerScore) {
            showWinner.innerHTML = 'Congrats, you won!';
        }else {
            showWinner.innerHTML = 'Sorry, you lose!';
        }
    }else {
        
        //call playRound function and get result
        let result = playRound(playerSelection, getComputerChoice());

        //user won round
        if(result === 'UserWins') {
            //keep adding 1 score for each round
            //make score integer
            showUserScore.innerHTML = parseInt(showUserScore.innerHTML) + 1;
            console.log('UserWins')

        //computer won round
        }else if(result === 'ComputerWins') {
            //keep adding 1 score for each round
            //make score integer

            showComputerScore.innerHTML = parseInt(showComputerScore.innerHTML) + 1;
            console.log('ComputerWins')
        
        //it's a tie
        } else if(result === 'Tie') {
            console.log('NA')
        }

        //keep adding 1 for each round
        //make score integer
        showRounds.innerHTML = parseInt(showRounds.innerHTML) + 1;
    }

}

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

    //display selections
    console.log('You: ' + playerSelection + ' | ' + 'Computer: ' + computerSelection);

    //user and computer selects same choice
    if (playerSelection === computerSelection) {
        showMsg.innerHTML = 'It\'s a tie! You both chose ' + playerSelection + '.';
        return 'Tie'
    }

    //user selected rocks
    if(playerSelection === 'rock') {
        if (computerSelection === 'scissors'){
            showMsg.innerHTML = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
            return 'UserWins'
        }else {
            showMsg.innerHTML = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
            return 'ComputerWins'
        }
    //user selected paper
    }else if(playerSelection === 'paper') {
        if (computerSelection === 'rock'){
            showMsg.innerHTML = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
            return 'UserWins'
        }else {
            showMsg.innerHTML = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
            return 'ComputerWins'
        }
    //user selected scissors
    }else if(playerSelection === 'scissors') {
        if (computerSelection === 'paper'){
            showMsg.innerHTML = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
            return 'UserWins'
        }else {
            showMsg.innerHTML = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.';
            return 'ComputerWins'
        }
    //invalid value
    }else {
        showMsg.innerHTML = 'Invalid result.';
        return 'invalid'
    }
}
