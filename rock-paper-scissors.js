let humanScore = 0;
let computerScore = 0;
let humanSelection = 0;
let comuterSelection = 0;

/*function getComputerChoice () {
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
} */

function getHumanChoice () {
    let humanInput = (prompt("Rock, Paper, Scissors?")).toLowerCase();
    return humanInput;
}

//Game Loop

function playGame() {
    for (let i = 0; i < 5; i++) {
            
        let computerSelection = function getComputerChoice () {
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

        let humanSelection = getHumanChoice();
        
        console.log(`${humanSelection} VS ${computerSelection}`)
       
        return function playRound(humanChoice, computerChoice) {

            //In case of a draw
            if (humanChoice == computerChoice) {
                console.log(`${humanChoice} against ${computerChoice}. Its a draw!`);
            }
            //Player wins
            else if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore++;
                return (`${humanChoice} beats ${computerChoice}. Player wins!`);
            }
            else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                return (`${humanChoice} beats ${computerChoice}. Player wins!`);
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore++;
                return (`${humanChoice} beats ${computerChoice}. Player wins!`);
            }
            //Computer wins
            else if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore++;
                return (`${computerChoice} beats ${humanChoice}. Computer wins!`);
            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
                computerScore++;
                return (`${computerChoice} beats ${humanChoice}. Computer wins!`);
            }
            else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore++;
                return (`${computerChoice} beats ${humanChoice}. Computer wins!`);
            }
            else {
                return (`There might have been a Typo.`);
            }
        }
    }
}

playGame();