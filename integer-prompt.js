// Write a program that repeatedly prompts a user for integer numbers until the user enters 
// 'done'. Once 'done' is entered, print out the largest and smallest of the numbers. If the user 
// enters anything other than a valid number catch it with a try/except and put out an appropriate 
// message and ignore the number. Enter the numbers from the book for problem 5.1 and Match the 
// desired output as shown.

function program() {
  var smallest = null;
  var largest = null;
  while (true) {
    var input = prompt("Enter an integer. Enter 'done' to terminate the program.");
    if (input === 'done') {
      break;
    }
    if (isNaN(input)) {
      alert('Input is Invalid: Not a Number')
    }
    var value = parseInt(input)
    if (Number.isInteger(value)) {
      if (smallest === null && largest === null) {
        smallest = value;
        largest = value;
      } else if (value > largest) {
        largest = value;
      } else if (value < smallest) {
        smallest = value;
      }
    } 
  }
  console.log("smallest: ", smallest);
  console.log("largest: ", largest);
}

program();
