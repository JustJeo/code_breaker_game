console.log("AYO! This is Jeo!");

// ~~~~~~~~~~ Light Mode FX ~~~~~~~~~~
function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
};

// ~~~~~~~~~~ Initial Load Declarations ~~~~~~~~~~
// Player Guess
let player_attempts = 3;

// ~~~~~~~~~~ Game Logic! ~~~~~~~~~~
let game = {
    // Game Variables
    secret_code: [],
    player_code: [],

    // SECRET CODE FX
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
            // Calls gameOver fx
            game.gameOver();
            // Changes text to "Game Over"
            return document.getElementById("player-attempts-text").innerHTML = "Game Over";
        // If player is on last attempt, update text to display this
        } else if(player_attempts == 1) {
            console.log('Last Attempt!');
            // Changes text to "Last Attempt!"
            return document.getElementById("player-attempts-text").innerHTML = "Last Attempt!";
        // If player code != secret code, then -1 player attempts and player gets to guess again
        } else {
            console.log(player_attempts + ' Attempts left');
            // Updates text to show the correct number of attempts left
            return document.getElementById("player-attempts-text").innerHTML = `${player_attempts} Attempts`;
        }
    },

    // VALIDATE PLAYER GUESS FX
    // Checks that the value in the player input boxes are
        // - Numbers
        // - Single digit numbers [0-9]
        // - Not a negative number
    validPlayerNumber: function(event) {
        const number_value = parseInt(event.number_value, 10);
        if (number_value > 9) {
            event.number_value = 9;
        } else if (number_value < 0) {
            event.number_value = 0;
        }
    },

    // PLAYER GUESS SUBMIT FX
    // Player submits a guess in the input field
    player_input: document.getElementById("player-submission-input"),
    
    // PLAYER CODE GUESS
    // Place player input submission into official player code array
    playerCodeGuess: function(event) {
        // .value grabs the submitted value in the input field
        // .trim removes any extra spaces that could be entered
        const player_submission = game.player_input.value.trim();
        //     // Guess will be a PUSH to add most recent guess to the END of an array
        //     // Using PUSH will allow us to display past guesses to the player if their first guess is wrong.
        if (event.target.id === "player-guess-btn") {

            //const player_submission = [];
            game.player_code.push(player_submission);
            console.log("Player Submission:", game.player_code);
        }
    },
    
    // PLAYER CODE CHECK
    // Check player code to secret code
    codeCheck: function() {
        // If player guesses the correct secret code
        if(game.player_code.toString() === game.secret_code.toString()) {
            console.log("Great job!");
            // Updates text where attempts are
            document.querySelector("#player-attempts-text").innerHTML = "You cracked the code!";
            // Calls gameOver fx
            game.gameOver();
            console.log(game.player_code, game.secret_code);
        // Else, the player's guess doesn't match the secret code
        } else {
            console.log("Wrong. Try again.");
            // Subtracts 1 from the current guess amount
            game.subtractGuessAmount();
            // Updates text on page of how many guesses are left for the player
            document.querySelector("#player-attempts-text").innerHTML = game.getGuessAmount();
            console.log(game.player_code, game.secret_code);
        }
    },
    
    // GUESS AMOUNT SUBTRACTION FX
    // If player code != secret code, minus one from total attempts left
    subtractGuessAmount: function() {
        player_attempts --;
    },

    // RESET PLAYER INPUT FX
    // If player code != secret code, empty out player code
    resetPlayer: function() {
        game.player_input = [];
    },

    // GAME OVER FX
    // Triggers when the game is over for whatever reason
    gameOver: function() {
        // Hides "Submit Guess" btn
        document.getElementById("player-guess-btn").style.display = "none";
        // Shows "Play Again" btn
        document.getElementById("play-again-btn").style.display = "block";
    },

    // GAME RESET FX
    // Resets the game when the player wants to play again
    gameReset: function() {
        // Resets number of player attempts available
        game.player_attempts = 3;
        // Empties out player code
        game.player_code = [];
        // Empties out secret code
        game.secret_code = [];
        // Generates new random code
        game.generateSecretCode();
        // Updates "Official Code" on feedback section
        // Delete this before official 1.0 ver. For feedback while making game only
        document.getElementById("official-secret-code").innerHTML = `Official Code: ${game.secret_code} `;
        console.log("Player Code:", game.player_code);
        console.log("Secret Code:", game.secret_code);
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
    // Calls gameReset fx
    game.gameReset();
    // Displays secret code
    console.log(game.secret_code);
    // Displays reset guess amount
    document.getElementById("player-attempts-text").innerHTML = game.getGuessAmount();
})
