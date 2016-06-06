// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

// Examples
// "(x + y) - (4)"     true
// "(((10 ) ()) ((?)(:)))"     true
// "(50)("     false
// ""  true

function balancedParens(string) {
  var stack = [];
  var leftCount = 0;
  var rightCount = 0;
  
  for (var i in string) {
    if (string[i] === '(') {
      leftCount++
      stack.push('Hi');
    }
    if (string[i] === ')') {
      rightCount++
      stack.pop();
    }
    console.log(stack)
  }
  console.log(leftCount, rightCount)
  return (stack.length === 0 && leftCount === rightCount);
}
