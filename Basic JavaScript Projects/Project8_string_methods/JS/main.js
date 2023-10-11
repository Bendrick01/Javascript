function full_Sentence() {
    var part1 = "I have";
    var part2 = "made this"
    var whole_sentence = part1.concat(part2);
    document.getElementById("concatenate").innerHTML = whole_sentence
}

function slice_method(){
    var sentence = "All work and no play makes Benny a dull boy";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }
 
function string_method(){
    var x = 182;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}
