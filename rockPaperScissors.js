console.log("Hello World")

let humanScore =0;

let computerScore = 0;




function getComputerChoice(){
   const getComputerChoiceValue =["rock","paper","scissors"];
    const computerValueIndex = Math.floor(Math.random()*3);
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
}

function playRound(humanChoice,computerChoice){
        switch(humanChoice,computerChoice) {
            case ("rock","paper"):
               console.log("You lose, paper beats rock");
                break;
            case "paper","scissors": 
                console.log("You lose, scissors beats paper");
                break;
            case "scissors","rock": 
                console.log("You lose,rock beats scissors");
                break;


            case ("paper","rock"):
               console.log("You win, paper beats rock");
                break;
            case "scissors","paper": 
                console.log("You win, scissors beats paper");
                break;
            case "rock","scissors": 
                console.log("You win,rock beats scissors");
                break;

            default : 
                console.log("No wayyyy,it's a draw!");
        }
    }
    


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));












