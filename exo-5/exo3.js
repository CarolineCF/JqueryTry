
var userInput= choice;


function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('erreur')
    }
}

function getComputerChoice() {
    let nombre = Math.floor(Math.random() * 3);

    if (nombre === 0) {
        return 'rock';
    }
    else if (nombre === 1) {
        return 'scissors';
    }
    else {
        return 'paper'
    }
}



function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {

        return 'Tield';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } else {
            return 'Lost';
        }
    } 
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Lost';
        } else {
            return 'Won';
        }
    }
    else if (userChoice === 'scissors') 
        if (computerChoice === 'rock') {
            return 'Lost';
        } else {
            return win;
        }
    }

    function playGame() {
        var uChoice = getUserChoice(userInput);
        var computerChoice = getComputerChoice();
        console.log(uChoice);
        console.log(computerChoice);
        console.log(determineWinner(uChoice,computerChoice));
    }



playGame();
        
    










console.log('exo-3');