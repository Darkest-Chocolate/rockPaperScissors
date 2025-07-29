console.log("Hello World")

let humanScore =0;

let computerScore = 0;


function playRound(humanChoice,computerChoice){
    humanChoice =getHumanChoice();
    humanChoice =humanChoice.toLowerCase();
        switch(humanChoice,computerChoice) {
            case ("rock","paper"):
               console.log("You lose, paper beats rock");
                break;
            case "paper","scissors": 
                console.log("You lose, scissors beats paper");
                break;
            case "scissors","rock": 
                console.log("You lose,rock betas scissors");
                break;
            default : 
                console.log("No wayyyy,it's a draw!");
        }
    }
    


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

const rock=0;
const paper=1;
const scissors=2;

function getComputerChoice(){
   
    return Math.floor(Math.random(3))
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