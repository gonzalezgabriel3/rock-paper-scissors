//create function getComputerChoice
//This function will return "rock", "paper" or "scissors"

function getComputerChoice(){
    let choice = (Math.floor(Math.random() * 3));
    

    switch (choice) {
        case 0:
            return "Rock";
            break;

        case 1:
            return "Paper";
            break;    

        case 2:
            return "Scissors";
            break;
    }
        
}

console.log(getComputerChoice());


//Create function getHumanChoice
//getHumanChoice returns the user input



//Create 2 variables to keep both the computer's score and the player's score
//Those two variables initialize to 0
//create function called playRound with parameters for humanChoice and computerChoice
//humanChoice is case insensitive
// playRound should output a string such as "You lose! Paper beats Rock"
//Increment score of the winner