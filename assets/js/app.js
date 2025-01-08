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
//let start_btn = document.getElementById("random-code-btn");

// Generate Secret Code
//let secret_code = [];
//secret_code.push(Math.floor(Math.random()*10000).toString().padStart(4, '0'));

// Set Empty Player Code Array
//let player_code = [];

// ~~~~~~~~~~ Game Logic! ~~~~~~~~~~
let game = {
    // Game Variables
    secret_code: [],
    player_code: document.getElementById("player-submission-input"),

    // Generate Secret Code
    generateSecretCode: function() {
        // Generates new random code
        game.secret_code.push(Math.floor(Math.random()*10000).toString().padStart(4, '0'));
    },

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
        // .value grabs the submitted value in the input field
        // .trim removes any extra spaces that could be entered
        const player_submission = game.player_code.value.trim();
        if (event.target.id === "player-guess-btn") {
            console.log(player_submission);
            game.player_code = player_submission;
            //game.player_code.push(player_submission);
        }
    },
    
    // PLAYER CODE CHECK
    // Check player code to secret code
    codeCheck: function() {
        // If player guesses the correct secret code
        if(game.player_code === game.secret_code) {
            //console.log("Great job!");
            game.subtractGuessAmount();
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
            console.log("Player Submission:", game.player_code);
        // Else, the player's guess doesn't match the secret code
        } else {
            //console.log("Wrong. Try again.");
            // Subtracts 1 from the current guess amount
            game.subtractGuessAmount();
            // Updates text on page of how many guesses are left for the player
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
            console.log("Player Submission:", game.player_code);
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
        game.player_code = [];
    },

    // GAME RESET FX
    // Resets the game when the player wants to play again
    gameReset: function() {
        // Resets number of player attempts available
        player_attempts = 3;
        // Empties out secret code
        secret_code = [];
        // Generates new random code
        secret_code.push(Math.floor(Math.random()*10000).toString().padStart(4, '0'));
        // Updates "Official Code" on feedback section
        // Delete this before official 1.0 ver. For feedback while making game only
        document.getElementById("official-secret-code").innerHTML = `Official Code: ${secret_code} `;
    }
}

// Listens for game starting click on "Random Code" btn
const startGame = document.getElementById("random-code-btn")
startGame.addEventListener("click", () => {
    // Generate Secret Code
    game.generateSecretCode();

    // ~~~~~~~~~~ TEMPORARY FEEDBACK START ~~~~~~~~~~
    console.log("Official Code:", game.secret_code);

    document.getElementById("official-secret-code").innerHTML = `Official Code: ${game.secret_code} `;
    // ~~~~~~~~~~ TEMPORARY FEEDBACK END ~~~~~~~~~~

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

// Listens for click on "Submit Guess" btn
document.getElementById("player-guess-btn").addEventListener("click", game.playerCodeGuess);
document.getElementById("player-guess-btn").addEventListener("click", game.codeCheck);

// Display "Play Again" btn when game is finsihed
const playAgain = document.getElementById("play-again-btn");
playAgain.addEventListener("click", () => {
    // Makes Submit btn visible
    document.getElementById("player-guess-btn").style.display = "block";
    // Hides Play Again btn
    document.getElementById("play-again-btn").style.display = "none";
    // Invokes gameReset fx
    game.gameReset();
    // Displays secret code
    console.log(secret_code);
    // Displays reset guess amount
    document.getElementById("player-attempts-text").innerHTML = game.getGuessAmount();
})




// ~~~~~~~~~~ TEMPORARY FEEDBACK START ~~~~~~~~~~
// Display player guess after code submission to verify that the right numbers are being captured by the game
//document.getElementById("player-guess-display").innerHTML = `Player Submission: ${player_code} `;

// console.log("Official Code:", game.secret_code);
//console.log("Player Code:", player_code);

// Display official secret code to ensure that it matches with console.log code
// document.getElementById("official-secret-code").innerHTML = `Official Code: ${game.secret_code} `;

// ~~~~~~~~~~ TEMPORARY FEEDBACK END ~~~~~~~~~~