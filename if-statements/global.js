//Part a
console.log( "5 == '5' is " + (5 == '5') ); //true
console.log( "5 == 'five' is " + (5 == 'five') ); //false
console.log( "5 == '6' is " + (5 == '6') ); //false
console.log( "5 === '5' is " + (5 === '5') );  //false
console.log( "5 == 2 + 3 is " + (5 == 2 + 3) ); //true
console.log( "5 == 5 is " + (5 == 5) ); //true
console.log( "5 === 5 is " + (5 === 5) ); //rue
console.log( "true == 'true' is " + (true == 'true') ); //true  FALSE
console.log( "true === 'true' is " + (true === 'true') );  //false
console.log( "true == false is " + (true == false) );  //false
console.log( "5 == 12 is " + (5 == 12) );  //false
console.log( "5 !== 12 is " + (5 != 12) );  //true
console.log( "5 < 12 is " + (5 < 12) );  //true
console.log( "5 <= 12 is " + (5 <= 12) ); //true
console.log( "5 > 12 is " + (5 > 12));  //false
console.log( "5 >= 12 is " + (5 >= 12));  //false

////Part b

var password = "guess";

var userGuess = prompt("What do you think the password is?");

if (password === userGuess) {
  alert("Good job!");
}
else {
  alert("Sorry the password is actually " + password + ".");
}

//part c

var secretNum = 23;

var userGuess = prompt("What do you think the number is?");

if (secretNum == userGuess) {
  alert("Good job!");
}
else {
  alert("Sorry the password is actually " + secretNum + ".");
}


//part d
while(!age) var age = parseInt(prompt("Tell me your age."));

switch(true) {
case (age < 0):
  console.log("You haven't been born yet.");
  break;
case (age >= 0 && age < 16):
  console.log("You can't drive yet, but you'll be able to in a few years.");
  break;
case (age >=25):
  console.log("You can rent a car.");
case (age >= 21):
  console.log("Please don't drink and drive.");
case (age >= 16):
  console.log("You are eligible for a driver's license.");
  break;
default:
  console.log("Nothing worked.");
  break;
}


//part e
console.log("Same thing as above, but this time, I will just give you one statement.");
switch(true) {
case (age < 0):
  console.log("You haven't been born yet.");
  break;
case (age >= 0 && age < 16):
  console.log("You can't drive yet, but you'll be able to in a few years.");
  break;
case (age >=25):
  console.log("You can rent a car.");
  break;
case (age >= 21):
  console.log("Please don't drink and drive.");
  break;
case (age >= 16):
  console.log("You are eligible for a driver's license.");
  break;
default:
  console.log("Nothing worked.");
  break;
}



//part f
while (!a) var a = parseFloat(prompt("We're going to test whether you can make a triangle.  Enter the length of the first side."));

while (!b) var b = parseInt(prompt("Enter the length of the second side."));

while(!c) var c = parseFloat(prompt("Enter the length of the third side."));

var longestSide = Math.max(a, b, c);
var shortestSide = Math.min(a, b, c);
var mediumSide = a + b + c - longestSide - shortestSide;
var sumShortestSides = Math.min(a + b, b + c, c + a);

if (longestSide <= sumShortestSides) {
  console.log("A triangle of sides " + a + ", " + b + ", and " + c + " is possible.");
}
else {
  console.log("A triangle of sides " + a + ", " + b + ", and " + c + " is not possible.");
}

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
