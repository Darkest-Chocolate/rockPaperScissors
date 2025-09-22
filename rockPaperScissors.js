console.log("Hello World")

let humanScore =0;

let computerScore = 0;




function getComputerChoice(){

    const getComputerChoiceValue =["rock","paper","scissors"];
    const computerValueIndex = Math.floor(Math.random()*3);

    switch(getComputerChoiceValue){
        case(0):
            alert("The Computer chose Rock");
            break;
        case(1):
            alert("The Computer chose Paper");
            break;
        case(3):
            alert("The Computer chose Scissors");
            break; 
    }

    return getComputerChoiceValue[computerValueIndex];
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
            case "rock","paper":
               result = "You lose, paper beats rock";
                break;
            case "paper","scissors": 
                result = "You lose, scissors beats paper";
                break;
            case "scissors","rock": 
                result = "You lose,rock beats scissors";
                break;

            case "paper","rock":
               result = "You win, paper beats rock";
                break;
            case "scissors","paper": 
                result = "You win, scissors beats paper";
                break;
            case "rock","scissors": 
                result ="You win,rock beats scissors";
                break;

            default : 
                result = "No wayyyy,it's a draw!";
        }
        return result;
    }
    


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);












