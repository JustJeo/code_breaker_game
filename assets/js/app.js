console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_guess = 10;

// Start Btn
let start_btn = document.getElementById("random-code-btn");

// Game Logic!
let game = {
    // Empty Declerations
    secretCode: [],
    playerCode: [],
    // Place secret code into secret array

    // Randomly grabs one number
    getRandomNumber: function() {
        return Math.floor(Math.random()*10);
    },

    // Uses random number fx to generate secret code for game.
    getSecretCode: function() {
        document.getElementById("code1").innerHTML = game.getRandomNumber();
        document.getElementById("code2").innerHTML = game.getRandomNumber();
        document.getElementById("code3").innerHTML = game.getRandomNumber();
        document.getElementById("code4").innerHTML = game.getRandomNumber();
        document.getElementById("player-guess-text").innerHTML = game.getGuessAmount();
    },
    
    // Place player code into player array




    // Check player code to secret code

    // If player code == secret code, then player wins

    // if player code != secret code, then -1 player guess and player gets to guess again

    // if player guess == 0, then game is over
    getGuessAmount: function() {
        if(player_guess == 1) {
            return document.getElementById("player-guess-text").innerHTML = "Game Over";
        } else if(player_guess == 2) {
            player_guess --;
            return document.getElementById("player-guess-text").innerHTML = "Last Attempt!";
        } else {
            player_guess --;
            console.log(player_guess);
            return document.getElementById("player-guess-text").innerHTML = `${player_guess} Attempts`;
        }
    }
}

// Listens for click on "Secret Code" btn
start_btn.addEventListener("click", () => {
    game.getSecretCode();
});

// Display "Play Again" btn when game is finsihed
