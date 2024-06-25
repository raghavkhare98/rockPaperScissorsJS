const choices = ["rock", "paper", "scissor"];
let roundCount = 0;
let humanScore = 0;
let computerScore = 0;
const roundCountText = document.querySelector('#round-count');
const humanScoreText = document.querySelector('#human-score');
const computerScoreText = document.querySelector('#computer-score');
function getComputerChoice(){
    const computerChoiceText = document.querySelector('#computer-choice')
    let computerChoice = choices[Math.floor(Math.random(0) * 3)];
    computerChoiceText.textContent = `The computer chose ${computerChoice}`;
    return computerChoice;
}

function getHumanChoice(){
    const userChoiceText = document.querySelector('#user-choice')
    let userChoice = "s";
    const rockButton = document.querySelector('#rock-button');
    const paperButton = document.querySelector('#paper-button');
    const scissorButton = document.querySelector('#scissors-button');
    rockButton.addEventListener("click", () => {
        userChoice = "rock";
        userChoiceText.textContent = `The user chose ${userChoice}`;
        return userChoice;
    })
    paperButton.addEventListener("click", () => {
        userChoice = "paper";
        userChoiceText.textContent = `The user chose ${userChoice}`;
        return userChoice;
    })
    scissorButton.addEventListener("click", () => {
        userChoice = "scissor";
        userChoiceText.textContent = `The user chose ${userChoice}`;
        return userChoice;
    })
}

function playRound(humanSelection, computerSelection){
    let roundResult = document.querySelector('#round-result');
    switch(humanSelection){
        case "rock":
            if(computerSelection.toLowerCase() === "paper"){
                roundResult.textContent = "You lose! Paper beats Rock";
                computerScore++;
            } else if(computerSelection.toLowerCase() === "scissor"){
                roundResult.textContent = "You win! Rock beats Scissor"
                humanScore++;
            } else{
                roundResult.textContent = "It's a tie.";
            }
            break;
        case "paper":
            if(computerSelection.toLowerCase() === "rock"){
                roundResult.textContent = "You win! Paper beats Rock";
                humanScore++;
            } else if(computerSelection.toLowerCase() === "scissor"){
                roundResult.textContent = "You lose! Scissor beats Paper";
                computerScore++;
            } else{
                roundResult.textContent = "It's a tie.";
            }
            break;
        case "scissor":
            if(computerSelection.toLowerCase() === "paper"){
                roundResult.textContent = "You win! Scissor beats paper";
                humanScore++;
            } else if(computerSelection.toLowerCase() === "rock"){
                roundResult.textContent = "You lose! Rock beats Scissor";
                computerScore++;
            } else{
                roundResult.textContent = "It's a tie.";
            }
            break;    
    }
    humanScoreText.textContent = `Your score: ${humanScore}`;
    computerScoreText.textContent = `Computer's score: ${computerScore}`;
}

function playGame(){
    let gameResult = document.querySelector('#game-result');
    // while(humanScore < 5 || computerScore < 5){ 
    //     playRound(getHumanChoice(), getComputerChoice())
    //     roundCount++;
    // }
    playRound(getHumanChoice(), getComputerChoice())
    roundCount++;
    roundCountText.textContent = `Number of round played: ${roundCount}`;
    if(humanScore == 5){
        gameResult.textContent = `Congratulations! You won!`
    } else if(computerScore == 5){
        gameResult.textContent = `Nice try! The computer won this set`;
    }
}
console.log(humanScore);
playGame();

