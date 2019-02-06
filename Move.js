document.getElementById("Watch").addEventListener("click", ageF);

function ageF() {
    var myAge = prompt("Enter your Age");

    if (myAge >= 12) {
        alert("You can watch Movie");
    } else {
        alert(" Not allowed to Watch");
    }
}