

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



const div = document.querySelector("#content");
let winnerText = document.createElement("p");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const liveScore = document.querySelector("#score");
const liveChoices = document.querySelector("#liveChoices");



div.setAttribute("style", "background-color: #a1b5ac; width: 400px; margin:auto; padding: 10px; border:5px solid black;");


let humanScore = 0;
let computerScore = 0;
let humanChoice ="";
let computerChoice ="";

rock.addEventListener("click", function(){
    winnerText.remove();
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    roundScore();
    console.log(humanChoice, computerChoice, humanScore, computerScore);
    declareWinner();
    
});

paper.addEventListener("click", function(){
    winnerText.remove();
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    roundScore();
    console.log(humanChoice, computerChoice, humanScore, computerScore);
    declareWinner();
});


scissors.addEventListener("click", function(){
    winnerText.remove();
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    roundScore();
    console.log(humanChoice, computerChoice, humanScore, computerScore);
    declareWinner();
});



function roundScore(){
    computerChoice = getComputerChoice();
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
            liveChoices.textContent = "Your Choice: " + humanChoice + " | Computer Choice: "
                                       + computerChoice;
            liveScore.textContent = "Your Score: " + humanScore + " | " 
                                    + "Computer Score: " + computerScore;
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
            liveChoices.textContent = "Your Choice: " + humanChoice + " | Computer Choice: "
                                       + computerChoice;
            liveScore.textContent = "Your Score: " + humanScore + " | " 
                                    + "Computer Score: " + computerScore;
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
            liveChoices.textContent = "Your Choice: " + humanChoice + " | Computer Choice: "
                                       + computerChoice;
            liveScore.textContent = "Your Score: " + humanScore + " | " 
                                    + "Computer Score: " + computerScore;
            break;
    }
}

function declareWinner(){
    if(humanScore== 5|| computerScore == 5 ){
        let winner ="";
        if (humanScore>computerScore){
            winner = "Human"
        } else if (computerScore>humanScore) {winner = "Computer";}
        winnerText.textContent = `${winner} won!`;
        winnerText.setAttribute("style","font-weight:bold; font-size: 30px;")
        div.appendChild(winnerText);
        humanScore= 0;
        computerScore = 0;        
        

    }
}


// function playGame(){

//     let humanScore = 0;
//     let computerScore = 0;

//     function playRound(humanChoice, computerChoice){
//     console.log("Computer chose " + computerChoice);
//     switch (humanChoice.toLowerCase()) {
//         case "rock":
//             if (computerChoice === "rock"){
//                 console.log("Tie");
//             } else if (computerChoice === "paper"){
//                 console.log("You Lose, paper beats rock!");
//                 computerScore += 1;
//             } else if (computerChoice === "scissors"){
//                 console.log("You Win, rock beats scissors!");
//                 humanScore += 1;
//             }
//             break;

//             case "paper":
//             if (computerChoice === "rock"){
//                 console.log("You Win, paper beats rock!");
//                 humanScore += 1;
//             } else if (computerChoice === "paper"){
//                 console.log("Tie");                
//             } else if (computerChoice === "scissors"){
//                 console.log("You Lose, scissors beats paper!");
//                 computerScore += 1;
//             }
//             break;

//             case "scissors":
//             if (computerChoice === "rock"){
//                 console.log("You Lose, rock beats scissors!");
//                 computerScore += 1;
//             } else if (computerChoice === "paper"){
//                 console.log("You Win, scissors beats paper!");
//                 humanScore += 1;
//             } else if (computerChoice === "scissors"){
//                 console.log("Tie");
                
//             }
//             break;
//     }
    
//     console.log("Human Score: " + humanScore);
//     console.log("Computer Score: " + computerScore);

// }
    

    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());

//create 3 buttons for paper, scissors and rock
// the value of the button pressed will be stored in a variable
// display results of each round in a div instead of console
// whoever reaches 5 points first will be declared winner


//     if (humanScore > computerScore){
//         console.log("HUMAN WON!!!")
//     } else if (computerScore > humanScore){
//         console.log("COMPUTER WON!!!")
//     } else console.log("ITS A TIE!!!");
// }

// playGame();