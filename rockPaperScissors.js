console.log("Hello World")

const rock=0;
const paper=1;
const scissors=2;

let choice =("rock","paper","scissors");

function getComputerChoice(){
    return Math.floor(Math.random(3))
    }

 
function getHumanChoice(){
    return prompt("What is your choice warrior?");
}
    