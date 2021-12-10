//Have the user enter 5 numbers use an alert to display the largest number//
// Input: -5,-2,-6,0,-1//
//output: 0//

var size = Number(prompt("How many numbers"));
var userNumbers = [];
for (i = 0; i < size; i++){
    nbr = number(prompt("Enter a number"));
    userNumbers.push(nbr);
}
var largest = userNumbers[0];
for (i = 0; i < size; i++){
    if(userNumbers[i] > largest)
        largest = userNumbers[i];
    }
    
alert("The largest number is " + largest);