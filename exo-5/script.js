console.log("exercice 5");

$(document).ready(() => {


    $('img').on('click', (event) => {
        $(event.currentTarget)
        var $choice = $(event.currentTarget).parents('.panel').find('.panel-heading').text()
        var $computChoice = getComputerChoice()
        var $winner = determineWinner($choice, $computChoice)

        $('#userChoice').text($choice)
        $('#computerChoice').text($computChoice);
        $('#winner').text($winner);

    });



});




function getUserChoice(userInput) {
    userInput;
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
            return 'You won';
        } else {
            return 'You lost';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You lost';
        } else {
            return 'You won';
        }
    }
    else if (userChoice === 'scissors')
        if (computerChoice === 'rock') {
            return 'You lost';
        } else {
            return 'You won';
        }
}

function playGame() {
    var uChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(determineWinner(uChoice, computerChoice));
}



