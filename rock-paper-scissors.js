let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function () {
    let getRandomInt = Math.floor(Math.random() * 3)

    if (getRandomInt == 0) {
        return "Rock";
    } 
    else if (getRandomInt == 1) {
        return "Paper";
    }   
    else {
        return "Scissors";
    }
}

let humanChoice = function getHumanChoice () {
    let humanInput = prompt("Rock, Paper, Scissors?");
    console.log(humanInput)
    return humanInput;
}

