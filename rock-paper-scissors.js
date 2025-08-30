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

    } else {
        console.log("The game continues...");
    }
}

//Execute
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`${humanSelection} VS ${computerSelection}`)

playRound(humanSelection, computerSelection);