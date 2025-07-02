console.log("Hello World")

let humanScore =0;

let computerScore = 0;

const rock=0;
const paper=1;
const scissors=2;

function playRound(humanChoice,computerChoice){
    if(playRound(rock,paper)){
        alert("You lose, paper beats rock");
    }else if(paper,scissors){
        alert("You lose, scissors beats paper");
    }else if (scissors,rock){
        alert("You lose,rock betas scissors");
    }else if ((paper,paper)||(rock,rock)||(scissors,scissors)){
        alert("No wayyyy,it's a draw!");
    }else{
        alert("You won!You are very lucky, death to skynet!!")
    }

    
   if (humanChoice.toLowerCase()=("rock"||"paper"||"scissors")){
        alert (humanChoice); 
   }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

let choice =("rock","paper","scissors");

function getComputerChoice(){
    return Math.floor(Math.random(3))
    }

 
function getHumanChoice(){
    var getHumanChoiceValue = prompt("What is your choice warrior?")
        if (getHumanChoiceValue= "rock"){
            alert("So you choose Rock!")
        }else if (getHumanChoiceValue= "paper"){
            alert("So you choose Paper!")
        }else{
            alert("So you choose Scissors!")
}
}
    