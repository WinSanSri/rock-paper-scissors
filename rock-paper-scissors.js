function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    let choice;

    choice = choices[Math.floor(Math.random() * 3)];
    
    console.log(choice)
}