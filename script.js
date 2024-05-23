
let randomNumber = Math.floor(Math.random()*100 + 1)
let prevGuess = document.querySelector('#prevGuess');
let remGuess = document.querySelector('#remGuess');    
const button = document.querySelector('#button')
const displayMsg = document.querySelector('#display')
let userInput = document.querySelector('#input');   
let congoMessage = document.querySelector('#congoMessage');   

console.log(randomNumber)

let previousGuess = [];
let remainingGuess = 10;
let playGame = true;

if(playGame) {
    button.addEventListener( 'click', function(e) {
    const guess = parseInt(userInput.value) 
    userInput.value = ''
    validateInput(guess)
    })
}


function validateInput(userInput) {
    if(userInput === '' || isNaN(userInput ) ) {
        alert("Please enter valid number")
    }
    if( userInput <= 0 || userInput > 100) {
        alert("Enter Number within Range")
    }else {
        checkOutput(userInput)
    }
}

function checkOutput(userInput) {
    if(userInput === randomNumber) {
        congratulationMessage(`Congratulations you have won the game`)
        endGame()
    }
    if(userInput < randomNumber) {
        displayMessage(`Value is too low`)
    }
    if(userInput > randomNumber) {
        displayMessage(`Value is too high`)
    }
    else {
        if(remainingGuess >= 0) {
            
            prevGuess.innerHTML = `${userInput}` 
            remGuess.innerHTML = `${remainingGuess}`
            remainingGuess--;
        }
        else {
            endGame()   
        }            
    }   
}

function congratulationMessage(message) {
    congoMessage.innerHTML = `${message}`
}

function displayMessage(message) {
    displayMsg.innerHTML = `${message}`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    displayMsg.innerHTML = `<button id = "restart">New Game</button>`
    // congoMessage.innerHTML = ''
    playGame = false;
    newGame()
}

function newGame() {
    displayMsg.innerHTML = `<button id = "restart">New Game</button>`
    const newGame = document.querySelector('#restart');
    newGame.addEventListener( 'click', function(e) {
        randomNumber = Math.floor(Math.random()*100 + 1);
        // console.log(randomNumber)
        let previousGuess = [];
        let remainingGuess = 10;
        userInput.removeAttribute('disabled');
        congoMessage.innerHTML = ''
        playGame = true;
    })
}