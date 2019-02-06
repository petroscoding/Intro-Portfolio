document.getElementById("EnterName").addEventListener("click", myname);

function myname() {
    var name = prompt("Enter your name");
    if (name === "Petros") {
        alert("Hello Petros!");
    } else {
        alert("Hello stranger");
    }
}