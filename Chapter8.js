var dreamCar = {
    make: "TOYOTA ",
    model: "2016 ",
    color: "green",
    year: 2018,
    bodyStyle: "Sport Utility Vehicle",
    price: 280559
};

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;