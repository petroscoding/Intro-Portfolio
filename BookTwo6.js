document.getElementById("Three").addEventListener("click", myThree);


function myThree() {
    var i = 3;
    while (i < 10000) {
        document.write(i);
        i = i * 3;
    }

}