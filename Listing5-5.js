var item1;
var item2;
var item3;
var item4;
var item5;
var item6;
document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    item4 = prompt("Enter a new fourth thing: ");
    item5 = prompt("Enter a new fifth thing: ");
    item6 = prompt("Enter a new sixth thing: ");
    updateList();
}

function updateList() {
    document.getElementById("firstThing").innerHTML =
        item1;
    document.getElementById("secondThing").innerHTML =
        item2;
    document.getElementById("thirdThing").innerHTML =
        item3;
    document.getElementById("fourthThing").innerHTML =
        item4;
    document.getElementById("fifthThing").innerHTML =
        item5;
    document.getElementById("sixthThing").innerHTML =
        item6;
}