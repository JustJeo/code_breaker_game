console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Light Mode FX ~~~~~~~~~~
function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
};

// ~~~~~~~~~~ Dark Mode FX ~~~~~~~~~~
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_attempts = 3;

// Start Btn
let start_btn = document.getElementById("random-code-btn");

// Generate Secret Code
let secret_code = [];
secret_code.push(Math.floor(Math.random()*10000).toString().padStart(4, '0'));

// Set Empty Player Code Array
let player_code = [];

// Listens for game starting click on "Random Code" btn
start_btn.addEventListener("click", () => {
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
        // If player attempts == 0, then game is over
        if(player_attempts == 0) {
            console.log('Game Over.');
            document.getElementById("player-guess-btn").style.display = "none";
            document.getElementById("play-again-btn").style.display = "block";
            return document.getElementById("player-attempts-text").innerHTML = "Game Over";
        // If player is on last attempt, update text to display this
        } else if(player_attempts == 1) {
            console.log('Last Attempt!');
            return document.getElementById("player-attempts-text").innerHTML = "Last Attempt!";
        // If player code != secret code, then -1 player attempts and player gets to guess again
        } else {
            console.log(player_attempts + ' Attempts left');
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
        // If player guesses the correct secret code
        if(game.player_code === game.secret_code) {
            //console.log("Great job!");
            game.subtractGuessAmount();
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
        // Else, the player's guess doesn't match the secret code
        } else {
            //console.log("Wrong. Try again.");
            // Subtracts 1 from the current guess amount
            game.subtractGuessAmount();
            // Updates text on page of how many guesses are left for the player
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
    },

    // GAME RESET FX
    // Resets the game when the player wants to play again
    gameReset: function() {
        // Resets number of player attempts available
        player_attempts = 3;
        // Empties out secret code
        game.secret_code = [];
        //secret_code.push(Math.floor(Math.random()*10000).toString().padStart(4, '0'));
    }
}

document.getElementById("player-guess-btn").addEventListener("click", game.codeCheck);

// TEMPORARY FEEDBACK FX
// Display player guess after code submission to verify that the right numbers are being captured by the game
document.getElementById("player-guess-display").innerHTML = `Player Submission: ${player_code} `;

console.log("Official Code:", secret_code);
console.log("Player Code:");

// Display official secret code to ensure that it matches with console.log code
document.getElementById("official-secret-code").innerHTML = `Official Code: ${secret_code} `;

// Display "Play Again" btn when game is finsihed
const playAgain = document.getElementById("play-again-btn");
playAgain.addEventListener("click", () => {
    // Makes Submit btn visible
    document.getElementById("player-guess-btn").style.display = "block";
    // Hides Play Again btn
    document.getElementById("play-again-btn").style.display = "none";
    // Displays reset guess amount
    document.getElementById("player-attempts-text").innerHTML = game.getGuessAmount();
    // Invokes gameReset fx
    game.gameReset();
    // Displays secret code
    console.log(secret_code);
})