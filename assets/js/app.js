console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_guess = 10;

// Start Btn
let start_btn = document.getElementById("random-code-btn");


// Listens for click on "Secret Code" btn
start_btn.addEventListener("click", getSecretCode);

// Randomly grabs one number
function getRandomNumber() {
    return Math.floor(Math.random()*10);
}

// Uses random number fx to generate secret code for game.
function getSecretCode() {
    document.getElementById("code1").innerHTML = getRandomNumber();
    document.getElementById("code2").innerHTML = getRandomNumber();
    document.getElementById("code3").innerHTML = getRandomNumber();
    document.getElementById("code4").innerHTML = getRandomNumber();
}

// Place secret code into secret array

// Place player code into player array

// Check player code to secret code

// If player code == secret code, then player wins

// if player code != secret code, then -1 player guess and player gets to guess again

// if player guess == 0, then game is over
function getGuessAmount() {
    if(player_guess == 0) {
        return "Game Over";
    } else {
        player_guess --;
        return player_guess + "guesses left";
    }
}