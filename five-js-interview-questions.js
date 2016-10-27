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
