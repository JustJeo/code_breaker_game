console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_guess = 10;

// Start Btn
let start_btn = document.getElementById("random-code-btn");

// Listens for click on "Random Code" btn
start_btn.addEventListener("click", () => {
    game.getSecretCode();
    // Hides Start btn
    document.getElementById("random-code-btn").style.display = "none";
    // Shows Submit btn
    document.getElementById("player-guess-btn").style.display = "block";
});

// Game Logic!
let game = {
    // Empty Declerations
    secretCode: [],
    playerCode: [],
    
    // RANDOM NUMBER FX
    // Randomly grabs ONE number
    getRandomNumber: function() {
        return Math.floor(Math.random()*10);
    },

    // SECRET CODE FX
    // Place secret code into secret array
    // Uses random number fx to generate secret code for game.
    getSecretCode: function() {
        // Generates Code
        document.getElementById("code-slot-1").innerHTML = game.getRandomNumber();
        document.getElementById("code-slot-2").innerHTML = game.getRandomNumber();
        document.getElementById("code-slot-3").innerHTML = game.getRandomNumber();
        document.getElementById("code-slot-4").innerHTML = game.getRandomNumber();
        
        // Shows Attempt counter
        document.getElementById("player-guess-text").style.display = "block";
        // Sets Guess Amount
        document.getElementById("player-guess-text").innerHTML = game.getGuessAmount();
    },

    
    // Place player code into player array


    // PLAYER GUESS SUBMIT FX
    // Player submits a guess


    // Check player code to secret code



    // If player code == secret code, then player wins

    
    // GUESS AMOUNT FX
    getGuessAmount: function() {
        // if player guess == 0, then game is over
        if(player_guess == 1) {
            return document.getElementById("player-guess-text").innerHTML = "Game Over";
        // if player code != secret code, then -1 player guess and player gets to guess again
        } else if(player_guess == 2) {
            player_guess --;
            return document.getElementById("player-guess-text").innerHTML = "Last Attempt!";
        } else {
            player_guess --;
            console.log(player_guess);
            return document.getElementById("player-guess-text").innerHTML = `${player_guess} Attempts`;
        }
    },

    // RESET PLAYER INPUT FX
    // If player code != secret code, empty out player code
    resetPlayer: function() {
        game.playerCode = [];
    }
}

// Display "Play Again" btn when game is finsihed
