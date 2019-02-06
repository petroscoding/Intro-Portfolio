// Create an array of words

// Pick a random word
var word = pickWord();
// Set up the answer array
var answerArray = setUpAnswerArray(word);
var noOfGuesses = 0;
var remainingLetters = word.length;
// The game loop

while (remainingLetters > 0 && noOfGuesses < 15) {
    // Show the player their progress
    showPlayerProgress(answerArray);
    // Get a guess from the player
    var guess = getGuess();

    noOfGuesses++;
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        var lettersChanged = updateGameState(guess, word, answerArray);
        remainingLetters = remainingLetters - lettersChanged;
        alert("You have just changed " + lettersChanged + " letter/letters and have " + remainingLetters + " left");
    }
    // The end of the game loop
}
// Check if number of guesses exceeded
if (remainingLetters > 0 && noOfGuesses == 15) {
    alert("Number of guesses exceeded! The answer was " + word);
} else {
    // Show the answer and congratulate the player
    showAnswerAndCongratulatePlayer(answerArray);
}


function pickWord() {
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "coding",
        "programming",
        "hangman"
    ];

    return words[Math.floor(Math.random() * words.length)];
}

function setUpAnswerArray(word) {
    var guessAnswer = [];
    for (var i = 0; i < word.length; i++) {
        guessAnswer[i] = "_";
    }
    return guessAnswer;
}

function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
}

function getGuess() {
    return prompt("Guess a letter or click cancel to stop!").toLowerCase();
}

function updateGameState(guess, word, answerArray) {
    var numberOfLettersChanged = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] == "_") {
                answerArray[j] = guess;
                numberOfLettersChanged++;
            } else {
                alert("You have already guessed this letter");
                return numberOfLettersChanged;
            }
        }
    }
    return numberOfLettersChanged;
}

function showAnswerAndCongratulatePlayer(answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
}