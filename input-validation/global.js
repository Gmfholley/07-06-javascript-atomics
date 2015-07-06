
//part a

var password = "guess"

numGuesses = 1;
while (prompt("Guess the password!").toUpperCase() != password.toUpperCase()){
  alert("Not the right password.  But I am case insensitive.  Guess again!");
  numGuesses++;
}
  
alert("It took you " + numGuesses + " try/tries.");

//part b

var secretNumber = 8;

numGuesses = 1;
while (parseInt(prompt("Guess the number between one and 100.")) != secretNumber){
  alert("Not the right number. Guess again!");
  numGuesses++;
}
  
alert("It took you " + numGuesses + " try/tries.");


//part c

var innerRange = 1;
var outerRange = 8;

var sum = 0;
var count = 0;

while (true){
    var newNum = parseInt(prompt("Give me a number between " + innerRange + " and " + outerRange + "."));

  if ((newNum >= innerRange) && (newNum <= outerRange)) {
    sum += newNum;
    count++;
  }
  else {
    break;
  }
}

alert("The average of the numbers you provided is " + (sum/count));



//part d
while(true){
  var a = parseFloat(prompt("We're going to test whether you can make a triangle.  Enter the length of the first side."));

  var b = parseInt(prompt("Enter the length of the second side."));

  var c = parseFloat(prompt("Enter the length of the third side."));
  var longestSide = Math.max(a, b, c);
  var sumShortestSides = Math.min(a + b, b + c, c + a);
  

  if (longestSide <= sumShortestSides) {
    console.log("A triangle of sides " + a + ", " + b + ", and " + c + " is possible.");

    var mediumSide = a + b + c - longestSide - shortestSide;
    var shortestSide = Math.min(a, b, c);
    if (a == b || b == c || c == a) {
      if (a == b && b == c) {
        console.log("This is an equilateral triangle.")
      }
      else {
        console.log("This is an isosceles triangle.")
      }
    }
    else {
      console.log("This is a scalene triangle.")
    }

    if (Math.pow(shortestSide, 2) + Math.pow(mediumSide, 2) == Math.pow(longestSide, 2)){
      console.log("This is a right triangle.")
    }
    break;
  
  }
  else {
    alert("A triangle of sides " + a + ", " + b + ", and " + c + " is not possible.");
  }
}