function Ride_Function() {
  var Height, Can_Ride;

  // Get the height value from the input element
  Height = parseFloat(document.getElementById("Height").value);

  Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}
//A constructor function utilizinf "new" and "this" keywords
function Vehicle (Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail",2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");

//Function to display results of constructor within HTML element
function myFunction(){
  document.getElementById ("Keywords_and_Constructors").innerHTML = 
  "Erik drives a " +
  Erik.Vehicle_Color +
  " -colored " +
  Erik.Vehicle_Model +
  " manufactured in " +
  Erik.Vehicle_Year;
}
//nested function
function add_Strings(){
  var start_string = "Hello";

  function Adding(str) {
    start_string = start_string + " " + str;
  }
  Adding("World");
  document.getElementById("Nested_Functions").innerHTML = start_string;
}