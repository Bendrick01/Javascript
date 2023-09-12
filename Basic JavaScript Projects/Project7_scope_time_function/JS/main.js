//Global Variable
var x = 10;
function myFunction(){
  document.write (y + 25);
}
//Local Variable
function myFunction2()
{
  var y = 10;
  document.write (y + 30);
}
//If statement
function Get_Date() {
  if (new Date().getHours()<18) {
    document.getElementById("Greeting").innerHTML = "How are you today?"
    ;
  }
}
//If, Else If and Else statement
function myFunction3(){
  var x = 10;
  var y = 10;
  if (y > x) {
    document.getElementById("Test").innerHTML = "Yes"
  }
  else if (y = x) {
    document.getElementById("Test").innerHTML = "Equals"
  }
  else {
    document.getElementById("Test").innerHTML = "No"
  }
} 