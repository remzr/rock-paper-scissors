let humanScore = 0;
let computerScore = 0;

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

function roundPoints (humanScore, computerScore) {
    if (computerScore > humanScore) {
        return(`Computer has ${computerScore}, Player has ${humanScore} Points.`);
    } else {
        return(`Player has ${humanScore} Points, Computer has ${computerScore}.`);
    }
}

//Game Loop
function playRound(humanChoice) {  
    
    let computerSelection = getComputerChoice();
    let humanSelection = humanChoice.toLowerCase();   
    
    postResult(roundResult(humanSelection, computerSelection), roundPoints(humanScore, computerScore));
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
    const roundResultSection = document.querySelector("#result-section");

    const roundResultBox = document.createElement("div");
        roundResultBox.style.colorBackground = "grey";
        roundResultBox.style.padding = "16px";
        roundResultBox.style.textAlign = "center";

    const roundResultTitle = document.createElement("h3");
    const roundResultTxt = document.createElement("p");
    const replayButton = document.createElement("Button");
        replayButton.style.padding = "8px";
        replayButton.setAttribute("onClick","window.location.reload();");

    roundResultBox.appendChild(roundResultTitle);
    roundResultBox.appendChild(roundResultTxt);

    if (humanScore == 5) {
        roundResultTitle.textContent = "Player has 5 points and wins the game!";
        roundResultTxt.textContent = "Wanna try again?";
        roundResultBox.appendChild(replayButton);
        replayButton.textContent = "New Game";

    } else if (computerScore == 5) {
        roundResultTitle.textContent = "Computer has 5 points and wins the game!";
        roundResultTxt.textContent = "Wanna try again?";
        roundResultBox.appendChild(replayButton);
        replayButton.textContent = "New Game";        
    } else {
        roundResultTitle.textContent = resultTitle;
        roundResultTxt.textContent = resultTxt;
    }

    roundResultSection.prepend(roundResultBox);
    document.body.append(roundResultSection);

};

