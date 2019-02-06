// Challenge 1 Add words to array words
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "coding",
    "programming",
    "hangman"
];
// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var allowedGuesses = 0;

// The game loop checks remaining letters and allowed Guesess
while ((remainingLetters > 0) && (allowedGuesses < 3)) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop  playing.");
    allowedGuesses++;

    // Challenge 2 using toLowerCase to lowercase the user guess input
    var lowerGuess = guess.toLowerCase();

    if (lowerGuess === null) {
        // Exit the game loop
        break;
    } else if (lowerGuess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === lowerGuess) {
                answerArray[j] = lowerGuess;
                //Check whether a value in answerArray is still an underscore
                if (answerArray[j] !== "_") {


                    remainingLetters--;
                }
            }
        }
    }

    // The end of the game loop
}
// Show the answer and congratulate the player

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);