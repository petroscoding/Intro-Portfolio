document.getElementById("AnimalZoo").addEventListener("click", myZoo);


function myZoo() {
    var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
    for (var i = 0; i < animals.length; i++) {
        //alert("This zoo contains a " + animals[i] + ".");
        document.write("This zoo contains a " + animals[i] + ".");
    }
}