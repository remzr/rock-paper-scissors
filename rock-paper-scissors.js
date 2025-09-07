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
        return(`${humanChoice} against ${computerChoice}. Its a draw!`);
    }

    //Player wins
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return(`${humanChoice} beats ${computerChoice}. Player wins!`);
    }

    //Computer wins
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return(`${computerChoice} beats ${humanChoice}. Computer wins!`);
    }
    else {
        return(`There might have been a Typo.`);
    }
}

function roundPoints (computerScore, humanScore) {
    if (computerScore > humanScore) {
        return(`Computer has ${computerScore}, Player has ${humanScore} Points. Computer wins!`);
    } else {
        return(`Player has ${humanScore} Points, Computer has ${computerScore}. Player wins!`);
    }
}

//Game Loop
function playRound(humanChoice) {
    
    humanScore = 0;
    computerScore = 0;
    
    let computerSelection = getComputerChoice();
    let humanSelection = humanChoice.toLowerCase();   
   
    postResult(roundResult(computerSelection, humanSelection), roundPoints(humanScore, computerScore));
}

//Trigger game with buttons

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let text = event.currentTarget.innerText;
        playRound(text);
    });
});

//Add results
function postResult (resultTitle, resultTxt) {
    const roundResultBox = document.createElement("div");
        roundResultBox.style.colorBackground = "grey";
        roundResultBox.style.padding = "16px";
        roundResultBox.style.textAlign = "center";

    const roundResultTitle = document.createElement("h3");
    const roundResultTxt = document.createElement("p");

    roundResultBox.appendChild(roundResultTitle);
    roundResultBox.appendChild(roundResultTxt);

    roundResultTitle.textContent = resultTitle;
    roundResultTxt.textContent = resultTxt;

    document.body.append(roundResultBox);
};

