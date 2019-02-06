var pickWord = function() {
    // Return a random word
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
    return word;
};
var setupAnswerArray = function(word) {
    // Return the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        return answerArray;
    }
};
var showPlayerProgress = function(answerArray) {
    // Use alert to show the player their progress

};
var getGuess = function() {
    // Use prompt to get a guess
};
var updateGameState = function(guess, word, answerArray) {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
};
var showAnswerAndCongratulatePlayer = function(answerArray) {
    // Use alert to show the answer and congratulate the player
};
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);