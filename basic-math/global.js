// String.prototype.interpolate = function(props) {
//     return this.replace(/\{(\w+)\}/g, function(match, expr) {
//         return (props || window)[expr];
//     });
// };



while (!firstNum) var firstNum = parseInt(prompt("We are going to perform mathematical operations.  Give me a number."));
while (!secondNum) var secondNum = parseInt(prompt("And a second number please!"));

while (!thirdNum) var thirdNum = parseInt(prompt("One last number."));


console.log("The first number is " + firstNum);
console.log("The second number is " + secondNum);
console.log("The third number is + " + thirdNum);

//
// var sum = firstNum + secondNum + thirdNum;
// var difference = firstNum - secondNum - thirdNum;
// var product = firstNum * secondNum * thirdNum;
// var quotient = firstNum / secondNum / thirdNum;
// var incNum = firstNum + 1;
// var decNum = secondNum - 1;
//
// var toPow = Math.pow(secondNum, thirdNum);
//
console.log("The sum is " + (firstNum + secondNum + thirdNum) + ".");
console.log("The difference is " + (firstNum - secondNum - thirdNum) + ".");
console.log("The product is " + (firstNum * secondNum * thirdNum) + ".");
console.log("The quotient is " + (firstNum / secondNum / thirdNum) + ".");

console.log("The max of the first and second number is " + Math.max(firstNum, secondNum));