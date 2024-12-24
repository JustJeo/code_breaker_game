console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_attempts = 10;

// Start Btn
let start_btn = document.getElementById("random-code-btn");

// Generate Secret Code
let secret_code = [Math.floor(Math.random()*10000)];

// Set Empty Player Code Array
let player_code = [];

// Listens for game starting click on "Random Code" btn
start_btn.addEventListener("click", () => {
    game.getSecretCode();
    // Hides Start btn
    document.getElementById("random-code-btn").style.display = "none";
    // Shows Attempt counter
    document.getElementById("player-attempts-text").style.display = "block";
    // Gets Guess Amount
    document.getElementById("player-attempts-text").innerHTML = game.getGuessAmount();
    // Shows Player Input
    document.getElementById("player-guess-input").style.display = "block";
    // Shows Submit btn
    document.getElementById("player-guess-btn").style.display = "block";
});

// ~~~~~~~~~~ Game Logic! ~~~~~~~~~~
let game = {
    // GET GUESS ATTEMPTS REMAINING
    // Get number of Guesses
    getGuessAmount: function() {
        // if player guess == 0, then game is over
        if(player_attempts == 0) {
            document.getElementById("player-guess-btn").style.display = "none";
            return document.getElementById("player-attempts-text").innerHTML = "Game Over";
        // if player code != secret code, then -1 player guess and player gets to guess again
        } else if(player_attempts == 1) {
            return document.getElementById("player-attempts-text").innerHTML = "Last Attempt!";
        } else {
            console.log(player_attempts);
            return document.getElementById("player-attempts-text").innerHTML = `${player_attempts} Attempts`;
        }
    },

    // SECRET CODE FX
    // Place secret code into secret array

    // PLAYER GUESS SUBMIT FX
    // Player submits a guess
    // Guess will be a PUSH to add most recent guess to the END of an array
    // Using PUSH will allow us to display past guesses to the player if their first guess is wrong.
    
    // PLAYER CODE GUESS
    // Place player code into player array
    playerCodeGuess: function(event) {
        const playerSubmission = [];
        event.target.id === "player-guess-btn";
        game.playerCode.push(playerSubmission);
    },
    
    // PLAYER CODE CHECK
    // Check player code to secret code
    codeCheck: function() {
        if(game.playerCode.toString() === game.secretCode.toString()) {
            console.log("Wrong. Try again.");
            game.subtractGuessAmount();
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
        } else {
            console.log("Wrong. Try again.");
            game.subtractGuessAmount();
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
        }
    },

    // PLAYER CODE WIN
    // If player code == secret code, then player wins

    
    // GUESS AMOUNT SUBTRACTION FX
    // If player code != secret code, minus one from total attempts left
    subtractGuessAmount: function() {
        player_attempts --;
    },

    // RESET PLAYER INPUT FX
    // If player code != secret code, empty out player code
    resetPlayer: function() {
        game.playerCode = [];
    }
}

document.getElementById("player-guess-btn").addEventListener("click", game.codeCheck);

// TEMPORARY FEEDBACK FX
// Display player guess after code submission to verify that the right numbers are being captured by the game
document.getElementById("player-guess-display").innerHTML = `Player Submission: ${player_code} `;

console.log(secret_code);

// Display official secret code to ensure that it matches with console.log code
document.getElementById("official-secret-code").innerHTML = `Official Code: ${secret_code} `;

// Display "Play Again" btn when game is finsihed
