document.write (typeof 3);
document.write (2E310);
document.write (-2E310);
document.write(10<2);
document.write(10>2);
console.log(10>2);
document.write(10==10);
X = "10";
Y= 10;
document.write(X===Y);
document.write(5>2 && 10>4);
document.write(5 < 2 || 10 < 4);
function my_Function()
{
  document.getElementById("Test").innerHTML = 0/0;
}
function my_Function2()
{
  document.getElementById("Test2").innerHTML = isNaN('String');
}
function my_Function3()
{
  document.getElementById("Test3").innerHTML = isNaN('007');
}
function my_Function4()
{
  document.getElementById("Test4").innerHTML = !(20 > 10)
}