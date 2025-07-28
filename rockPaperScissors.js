console.log("Hello World")

let humanScore =0;

let computerScore = 0;

const rock=0;
const paper=1;
const scissors=2;

function getComputerChoice(){
    var getComputerChoiceValue 
        if (getComputerChoiceValue <= 0){
            getComputerChoiceValue== ("rock")
        }else if (getComputerChoiceValue =>1){
            getComputerChoiceValue=="paper"
        }else{
            getComputerChoiceValue=="scissors";
    return Math.floor(Math.random(4))
    }
}

function getHumanChoice(){
    var getHumanChoiceValue = prompt("What is your choice warrior?")
        if (getHumanChoiceValue=="rock"){
            alert("So you choose Rock!")
        }else if (getHumanChoiceValue=="paper"){
            alert("So you choose Paper!")
        }else{
            alert("So you choose Scissors!");
}
}

function playRound(humanChoice,computerChoice){

        switch(humanChoice,computerChoice) {
            case ("rock","paper"):
               "You lose, paper beats rock";
                break;
            case "paper","scissors": "You lose, scissors beats paper";
                break;
            case "scissors","rock": "You lose,rock betas scissors";
                break;
            default : "No wayyyy,it's a draw!"; 
                break;
        }
    }
    

   let humanChoice = ("rock")||("paper")||("scissors")
         humanChoice.toLowerCase(); 


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);