var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";
var i = prompt("Enter the Radom String Length you want")
while (randomString.length < i) {
    randomString = randomString + alphabet[Math.floor(Math.random() * alphabet.length)];
}
alert(randomString);