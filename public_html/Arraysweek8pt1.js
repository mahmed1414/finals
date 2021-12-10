//alerts; confirms;//

var animals = ['cow', 'pig', 'horse'];

var searchAnimals = prompt("Enter an animal").toLowerCase();
var searchOkay = confirm("search for" + searchAnimals + "?");
if (searchOkay){
    var animalFound = false;

if (animals[0] === searchAnimals) {
    animalFound = true;
} else if (animals[1] === searchAnimals){
    animalFound = true;
} else if (animals[2] === searchAnimals) {
    animalFound = true;
}
alert(searchAnimals + "found = " + animalFound);
}