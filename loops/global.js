//part a

var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

for (count = 1; count <= 10; count ++){
  console.log(count);
}


//part b

while (!counterStart) var counterStart = parseInt(prompt("Enter a starting value for me to start counting."));

while (!counterEnd) var counterEnd = parseInt(prompt("When should I stop?"));

while (!step) var step = parseInt(prompt("How much should I skip at each step?"));

for (count = counterStart; count <= counterEnd; count+=step){
  console.log(counterStart);
}

while (counterStart <= counterEnd) {
  console.log(counterStart);
  counterStart+= step;
}



//part c

var numBottles = 99;
var bottleOrBottles = "bottles";

console.log(numBottles + " " + bottleOrBottles + " of beer on the wall.");
console.log(numBottles + " " + bottleOrBottles + " of beer!");
console.log("You take one down and pass it around.");

while (numBottles > 1){
  if (numBottles == 2) {
    bottleOrBottles = "bottle";
  }
  console.log((--numBottles) + " " + bottleOrBottles + " of beer on the wall.");
  console.log(numBottles + " " + bottleOrBottles + " of beer on the wall.");
  console.log(numBottles + " " + bottleOrBottles + " of beer!");
  console.log("You take one down and pass it around.");

}


numBottles = 99;

console.log(numBottles + " " + bottleOrBottles + " of beer on the wall.");
console.log(numBottles + " " + bottleOrBottles + " of beer!");
console.log("You take one down and pass it around.");


for (count = numBottles; count > 1; count--){
  if (count == 2) {
    bottleOrBottles = "bottle";
  }
  console.log((count) + " " + bottleOrBottles + " of beer on the wall.");
  console.log(count + " " + bottleOrBottles + " of beer on the wall.");
  console.log(count + " " + bottleOrBottles + " of beer!");
  console.log("You take one down and pass it around."); 
}


//part d

while (!start) var start = parseInt(prompt("Help me start counting for fizzbuzz.  Give me a starting value."));

while (!end) var end = parseInt(prompt("When should I stop?"));

for (count = start; count <= end; count ++ ){
  var output = "";
  switch (true){
  case ((count % 5 == 0) && (count % 3 == 0)):
    output += "FizzBuzz";
    break;
  case (count % 3 == 0):
    output += "Fizz";
    break;
  case (count % 5 == 0):
    output += "Buzz";
    break;
  default:
    output = count;
    break;
  }
  console.log(output);
}

console.log(start)
console.log(end)


while (start <= end){
  var output = "";
  switch (true){
  case ((start % 5 == 0) && (start % 3 == 0)):
    output += "FizzBuzz";
    break;
  case (start % 3 == 0):
    output += "Fizz";
    break;
  case (start % 5 == 0):
    output += "Buzz";
    break;
  default:
    output = start;
    break;
  }
  console.log(output);
  start++;
}
