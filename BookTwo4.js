document.getElementById("CheckSheep").addEventListener("click", mysheep);


function mysheep() {
    var sheepCounted = 0;
    while (sheepCounted < 10) {
        //alert("I have counted " + sheepCounted + " sheep!");
        document.write("I have counted " + sheepCounted + " sheep!");
        sheepCounted++;
    }
    alert("Zzzzzzzzzzz");
}