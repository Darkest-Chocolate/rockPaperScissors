console.log("Hello World")

function humanScore(){
    
}

const rock=0;
const paper=1;
const scissors=2;

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
    