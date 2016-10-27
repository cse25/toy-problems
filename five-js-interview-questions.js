// 5 Typical JavaScript Interview Exercises

// https://www.sitepoint.com/5-typical-javascript-interview-exercises/

// Question 1: Scope

// Given this code:
(function() {
  var a = b = 5;
})();

console.log(b);

// What will be printed in the console?
// Answer: 5
// Because 'b' is declared without the keyword var, it is assigned to the global scope.
// Using strict mode would also require explicit reference to the global scope.

// Question 2: Create “native” methods
// Define a repeatify function on the String object. 
// The function accepts an integer that specifies how many times the string has to be repeated. 
// The function returns the string repeated the number of times specified. For example:

String.prototype.repeatify = function(numberOfTimes) {
  for (var i = 0; i <= numberOfTimes; i++) {
    console.log(this);
  }
}

console.log('hello'.repeatify(3));
// Should print hellohellohello.

// Question 3: Hoisting
// What’s the result of executing this code and why.

function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// undefined
// 2 
// var a = 1 is a variable declaration that is hoisted to the top of the function. 
// However, its value of 1 is not retained since the assignment expression does not get hoisted.
// When the interpreter gets to that line, 'a' is still undefined.
