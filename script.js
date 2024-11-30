// Generate random Number
// IF number is less than .33 rock
// IF number is greater than .33 but less than or equal to .66 paper    
// IF number is greater than .66 scissors
// Print string of rock,paper, or scissors

let humanScore = 0;
let computerScore = 0;
let cpuRock = false
let cpuPaper = false
let cpuScissors = false
let humanRock = false
let humanPaper = false
let humanScissors = false

function getComputerChoice(computerSelection){
 let ranNum = Math.random();
//  console.log(ranNum)
if (ranNum<.33){
    //  console.log("rock");
    cpuRock=true;
    cpuPaper=false
    cpuScissors=false
    
}
   else if (ranNum<=.66){
    //  console.log("paper");
    cpuPaper=true
    cpuRock=false
    cpuScissors=false
    
}
   else if (ranNum>.66){
    //  console.log("scissors")
    cpuScissors=true
    cpuPaper=false
    cpuRock=false
   
}
else{
    cpuRock = false
cpuPaper = false
cpuScissors = false
}
}


function getHumanChoice(){
  let userInput = prompt("Enter rock, paper, or scissors")
    if(userInput.toLowerCase()==="rock"){
        humanRock = true
        // console.log("rock")
    }
    else if(userInput.toLowerCase()==="paper"){
        humanPaper = true
        // console.log("paper")
    }
    else if(userInput.toLowerCase()==="scissors"){
        humanScissors = true
        // console.log("scissors")
    }
    else{
        prompt("Please refresh the page and enter with correct spellinga")
        humanRock = false
        humanPaper = false
        humanScissors = false
    }


}



function playRound( ){
console.log(cpuRock,cpuPaper,cpuScissors,humanRock,humanPaper, humanScissors)
if(cpuRock&&humanRock){
    alert("Human Rock, Cpu Rock, Draw")
    // alert(computerScore,humanScore)
    console.log(computerScore,humanScore)
    console.log("Human Rock, Cpu Rock, Draw")
}
else if (cpuRock&&humanPaper){
    humanScore++;
    alert("Human Paper beats Cpu Rock")
        // alert(computerScore,humanScore)
    console.log("Human Paper beats Cpu Rock")
     console.log(computerScore,humanScore)
}
else if(cpuRock&&humanScissors){
   computerScore++;
   alert("Cpu Rock beats Human Paper")
    //    alert(computerScore,humanScore)
   console.log("Cpu Rock beats Human Paper")
    console.log(computerScore,humanScore)
}
else if(cpuPaper&&humanRock){
 computerScore++;
alert("Cpu Paper beats Human Rock")
    // alert(computerScore,humanScore)
console.log("Cpu Paper beats Human Rock")
 console.log(computerScore,humanScore)
}
else if(cpuPaper&&humanPaper){
    alert("Human Paper, Cpu Paper, Draw")
        // alert(computerScore,humanScore)
         console.log(computerScore,humanScore)
}
else if(cpuPaper&&humanScissors){
    humanScore++;
    alert("Human scissors beats Cpu Paper")
        // alert(computerScore,humanScore)
         console.log(computerScore,humanScore)
}
else if(cpuScissors&&humanRock){
    humanScore++;
    alert("Human Rock beats Cpu Scissors")
        // alert(computerScore,humanScore)
         console.log(computerScore,humanScore)
}
else if(cpuScissors&&humanPaper){
    computerScore++;
    alert("Cpu Scissors beats Human paper")
        // alert(computerScore,humanScore)
         console.log(computerScore,humanScore)
}
else if(cpuScissors&&humanScissors){
    alert("Human Scissors, Cpu Scissors, Draw")
         console.log(computerScore,humanScore)
}

}
function playGame(){
    getHumanChoice();
    getComputerChoice();
    playRound();
}

playGame()
playGame()
playGame()
playGame()
playGame()
playGame()





// getHumanChoice()
// getComputerChoice()
// playRound()