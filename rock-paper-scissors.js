let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let getRandomInt = Math.floor(Math.random() * 3)

    if (getRandomInt == 0) {
        return "rock";
    } 
    else if (getRandomInt == 1) {
        return "paper";
    }   
    else {
        return "scissors";
    }
}

function getHumanChoice () {
    let humanInput = (prompt("Rock, Paper, Scissors?")).toLowerCase();
    return humanInput;
}

//Game Loop
function playRound (humanChoice, computerChoice) {
    
    //In case of a draw
    if (humanChoice == computerChoice) {
        console.log(`${humanChoice} against ${computerChoice}. Its a draw!`);
    }
    //Player wins
    else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }
    //Computer wins
    else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else {
            console.log(`There might have been a Typo.`);
    }
}


//Execute
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`${humanSelection} VS ${computerSelection}`)

playRound(humanSelection, computerSelection);