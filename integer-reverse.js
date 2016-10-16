// Integer Reverse
// Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. 
// Only use integers and math in your solution.

function reverseInteger (n) {
  for (var x = 0; n; n = Math.floor(n/10)) {
    console.log(n);
    x = x * 10;
    x = x + n % 10;
    console.log(x);
  }
  return x;
};
