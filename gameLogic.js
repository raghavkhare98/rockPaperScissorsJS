function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random(0) * 3)];
}
console.log(getComputerChoice());