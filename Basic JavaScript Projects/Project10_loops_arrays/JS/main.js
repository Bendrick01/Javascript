function count_toTen() {
    var Digit = "";
    var x = 1;
    while (x<11) {
        Digit += "<br>" + x;
        x++
    }
document.getElementById("Loop").innerHTML = Digit;
}
function count() {
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("demo").innerHTML = length;
}
var Instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"]
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function Cat_Pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this pictutre the cat is" + Cat_Picture[3] + ".";
}
function constant_function(){
    const Musical_Instrument = {type:"guitar", brand:"fender",color:"Black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="£900";
    Musical_Instrument.Year="1985";
    document.getElementById("Constant").innerHTML = "The cost of the" + Musical_Instrument.type + " was " + Musical_Instrument.price + "and was made in "+ Musical_Instrument.Year;
}
var x = 82;
document.write(X);
{
let X = 33;
document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make: "Dodge",
    model: "Viper",
    description: function () {
        return "The car is a " + this.make + " " + this.model;
    }
}

// This function is called when the button is clicked
function car_description() {
    // Set the innerHTML of the element with id "Car_Object" to the result of the description function
    document.getElementById("Car_Object").innerHTML = car.description();
}