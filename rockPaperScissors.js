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
    

function getHumanChoice(){
    var getHumanChoiceValue = prompt("What is your choice warrior?")
        if (getHumanChoiceValue=="rock"){
            alert("So you choose Rock!")
        }else if (getHumanChoiceValue=="paper"){
            alert("So you choose Paper!")
        }else{
            alert("So you choose Scissors!");
     }
    
    return getHumanChoiceValue;   
}




function playRound(humanChoice,computerChoice){
        switch(humanChoice+","+computerChoice) {
            case "rock,paper":
                return "You lose, paper beats rock";
                
            case "paper,scissors": 
                return "You lose, scissors beats paper";
                
            case "scissors,rock": 
                return "You lose,rock beats scissors";
                

            case "paper,rock":
                return "You win, paper beats rock";
                
            case "scissors,paper": 
                return "You win, scissors beats paper";
                
            case "rock,scissors": 
                return "You win,rock beats scissors";

            default : 
                return "No wayyyy,it's a draw!";
        }
    }
    

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);

console.log("Human:", humanSelection, "... Computer:", computerSelection);
console.log("Result:", result);
alert ("Result: "+ result);












