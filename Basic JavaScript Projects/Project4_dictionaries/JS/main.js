function my_dictionary() { //Function is defined
  var Animal = { //Dictionary defined
    Species : "Dog",
    Colour : "Brown",
    Breed : "Labrador",
    Name : "Coco",
  };
  delete Animal.Species; //Deleting Animal.Species
document.getElementById("dictionary").innerHTML = Animal.Species;
}
