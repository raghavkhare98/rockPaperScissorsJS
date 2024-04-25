const choices = ["rock", "paper", "scissor"];
let roundCount = 0;
let humanScore = 0;
let computerScore = 0;
const roundCountText = document.querySelector('.round-count');
const humanScoreText = document.querySelector('.human-score');
const computerScoreText = document.querySelector('.computer-score');
function getComputerChoice(){
    const computerChoiceText = document.querySelector('.computer-choice')
    let computerChoice = choices[Math.floor(Math.random(0) * 3)];
    computerChoiceText.textContent = `The computer chose ${computerChoice}`;
    return computerChoice;
}

function getHumanChoice(){
    const userChoiceText = document.querySelector('.user-choice')
    let userChoice = " ";
    while(choices.includes(userChoice.toLocaleLowerCase()) != true){
        userChoice = prompt("Enter a value from choices provided in the homepage:");
        if(choices.includes(userChoice.toLocaleLowerCase()) != true){
            alert("Please select a valid response from the below provided options");
        }
    }
    userChoiceText.textContent = `The user chose ${userChoice}`;
    return userChoice;
}

function playRound(humanSelection, computerSelection){
    switch(humanSelection){
        case "rock":
            if(computerSelection.toLowerCase() === "paper"){
                console.log("You lose! Paper beats Rock")
                computerScore++;
            } else if(computerSelection.toLowerCase() === "scissor"){
                console.log("You win! Rock beats Scissor")
                humanScore++;
            } else{
                console.log("It's a tie.")
            }
            break;
        case "paper":
            if(computerSelection.toLowerCase() === "rock"){
                console.log("You win! Paper beats Rock")
                humanScore++;
            } else if(computerSelection.toLowerCase() === "scissor"){
                console.log("You lose! Scissor beats Paper")
                computerScore++;
            } else{
                console.log("It's a tie.")
            }
            break;
        case "scissor":
            if(computerSelection.toLowerCase() === "paper"){
                console.log("You win! Scissor beats paper")
                humanScore++;
            } else if(computerSelection.toLowerCase() === "rock"){
                console.log("You lose! Rock beats Scissor")
                computerScore++;
            } else{
                console.log("It's a tie.")
            }
            break;    
    }
    humanScoreText.textContent = `Your score: ${humanScore}`;
    computerScoreText.textContent = `Computer's score: ${computerScore}`;

}

function playGame(){
    while(roundCount <= 4){
        playRound(getHumanChoice(), getComputerChoice())
        roundCount++;
    }
    roundCountText.textContent = `Number of round played: ${roundCount}`;
}
playGame();
