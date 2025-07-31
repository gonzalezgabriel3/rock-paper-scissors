//create function getComputerChoice
//This function will return "rock", "paper" or "scissors"

function getComputerChoice(){
    let choice = (Math.floor(Math.random() * 3));
    

    switch (choice) {
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;    

        case 2:
            return "scissors";
            break;
    }
        
}




//Create function getHumanChoice
//getHumanChoice returns the user input

function getHumanChoice(){
   let humanChoice = prompt("Rock, Paper or Scissors?");
   return humanChoice;
}



//Create 2 variables to keep both the computer's score and the player's score
//Those two variables initialize to 0





//create function called playRound with parameters for humanChoice and computerChoice
//humanChoice is case insensitive
// playRound should output a string such as "You lose! Paper beats Rock"
//Increment score of the winner

    







//Create function called playGame that calls playRound to play 5 rounds

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    console.log("Computer chose " + computerChoice);
    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice === "rock"){
                console.log("Tie");
            } else if (computerChoice === "paper"){
                console.log("You Lose, paper beats rock!");
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("You Win, rock beats scissors!");
                humanScore += 1;
            }
            break;

            case "paper":
            if (computerChoice === "rock"){
                console.log("You Win, paper beats rock!");
                humanScore += 1;
            } else if (computerChoice === "paper"){
                console.log("Tie");                
            } else if (computerChoice === "scissors"){
                console.log("You Lose, scissors beats paper!");
                computerScore += 1;
            }
            break;

            case "scissors":
            if (computerChoice === "rock"){
                console.log("You Lose, rock beats scissors!");
                computerScore += 1;
            } else if (computerChoice === "paper"){
                console.log("You Win, scissors beats paper!");
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("Tie");
                
            }
            break;
    }
    
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

}
    

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());


    if (humanScore > computerScore){
        console.log("HUMAN WON!!!")
    } else if (computerScore > humanScore){
        console.log("COMPUTER WON!!!")
    } else console.log("ITS A TIE!!!");
}

playGame();