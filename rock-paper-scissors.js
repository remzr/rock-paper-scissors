let humanScore;
let computerScore;

//Functions to set human and computer choice of rock, paper or scissors

function getHumanChoice () {
    let humanInput = (prompt("Rock, Paper, Scissors?")).toLowerCase();
    return humanInput;
}

function getComputerChoice() {
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

function roundResult(humanChoice, computerChoice) {
    //console.log(`Round started. Human-Score: ${computerScore} ComputerScore: ${humanScore}`);

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
        console.log (`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log (`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log (`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else {
        console.log (`There might have been a Typo.`);
    }
}

//Game Loop
function playRound() {
    
    humanScore = 0;
    computerScore = 0;
    
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
        
    console.log(`${humanSelection} VS ${computerSelection}`)       
    roundResult(computerSelection, humanSelection);

    if (computerScore > humanScore) {
        console.log(`Computer has ${computerScore}, Player has ${humanScore} Points. Computer wins!`);
    } else {
        console.log(`Player has ${humanScore} Points, Computer has ${computerScore}. Player wins!`);
    }
}

playRound();