function add() {
  var sum = 1 + 2;
  document.getElementById("add").innerHTML = "1 + 2 = " + sum;
}
function subtraction() {
  var sub = 9 - 7;
  document.getElementById("subtract").innerHTML = "9-7=" + sub;
}
function multiply() {
  var multiply = 3 * 3;
  document.getElementById("multiply").innerHTML = "3 * 3 = " + multiply;
}
function division(){
var division = 10 / 2;
document.getElementById("div").innerHTML = "10 \\ 2 = " + division;
}
function random(){
  document.getElementById("ran").innerHTML = Math.random()*10;
}
function modulus_operator () {
var modulus_operator = 38 % 4;
document.getElementById("mod").innerHTML = "WHEN YOU DIVIDE 38 BY 4 YOU HAVE A REMAINDER OF:"+ modulus_operator
}
function increment () {
  var value= document.getElementById("incrementtext").innerHTML = 1;
  value++
  document.getElementById("incrementtext").innerHTML = value;
}
function decrement () {
  var value= document.getElementById("decrementtext").innerHTML = 1;
  value--
  document.getElementById("decrementtext").innerHTML = value;
}
