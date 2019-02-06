document.getElementById("Choose").addEventListener("click", menu);

function menu() {
    var lemonChicken = false;
    var beefWithBlackBean = true;
    var sweetAndSourPork = false;
    if (lemonChicken) {
        alert("Great! I'm having lemon chicken!");
    } else if (beefWithBlackBean) {
        alert("I'm having the beef.");
    } else if (sweetAndSourPork) {
        alert("OK, I'll have the pork.");
    }
}