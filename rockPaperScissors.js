console.log("Hello World")

let humanScore =0;

let computerScore = 0;




function getComputerChoice(){

    const getComputerChoiceValue =["rock","paper","scissors"];
    const computerValueIndex = Math.floor(Math.random()*3);

    let computerChoice;

    switch(computerValueIndex){
        case(0):
            computerChoice ="rock";
            break;
        case(1):
            computerChoice ="paper";
            break;
        default:
            computerChoice ="scissors";
            break; 
    }
    return computerChoice;
    }
    

function getHumanChoice(humanSelection){
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);

    resultEl.textContent = `Result: ${roundResult}`;
  computerChoiceEl.textContent = `Computer chose: ${computerSelection}`;
  scoreEl.textContent = `Score — You: ${humanScore}  Computer: ${computerScore}`;

}







function playGame(){

    
    function playRound(humanChoice,computerChoice){

        const human = String(humanChoice).toLowerCase();
        const comp = String(computerChoice).toLowerCase();

        switch(humanChoice+","+computerChoice) {
            case "rock,paper":
                computerScore++;
                return "You lose, paper beats rock";
                
            case "paper,scissors": 
                computerScore++;
                return "You lose, scissors beats paper";
                
            case "scissors,rock": 
                computerScore++;
                return "You lose,rock beats scissors";
                

            case "paper,rock":
                humanScore++;
                return "You win, paper beats rock";
                
            case "scissors,paper": 
                humanScore++;
                return "You win, scissors beats paper";
                
            case "rock,scissors":
                humanScore++; 
                return "You win,rock beats scissors";

            default : 
                return "No wayyyy,it's a draw!";
        }
    }

}


const container = document.querySelector("#container");

// create and append result display
const resultEl = document.createElement("p");
resultEl.id = "result";
resultEl.textContent = "Click Rock / Paper / Scissors to play!";
container.appendChild(resultEl);

// score display
const scoreEl = document.createElement("p");
scoreEl.id = "score";
scoreEl.textContent = `Score — You: ${humanScore}  Computer: ${computerScore}`;
container.appendChild(scoreEl);

// computer's choice each round
const computerChoiceEl = document.createElement("p");
computerChoiceEl.id = "computerChoice";
computerChoiceEl.textContent = "";
container.appendChild(computerChoiceEl);


// for (let index = 0; index < 5; index++) {
//     playGame();
//     }



const paperButton =  document.querySelector("#Paper");

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

const rockButton =  document.querySelector("#Rock");

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});


const scissorsButton =  document.querySelector("#Scissors");

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});



  










