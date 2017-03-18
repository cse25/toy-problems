// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

var arr = [1,5,4,2];
var arr2 = [1, 7, 3, 4];

function getProductsOfAllIntsExceptAtIndex(array) {
  var totalResult = [];
  for (var i = 0; i < array.length; i++) {
    var innerResult = [];
    for (var j = 0; j < array.length; j++) {
      if (j !== i) {
        innerResult.push(array[j]);
      }
    }
    totalResult.push(innerResult);
  }

  var finalResult = [];
  for (var k = 0; k < totalResult.length; k++) {
    finalResult.push(totalResult[k].reduce(function(a,b) {
      return a * b;
    }));
  }

  return finalResult;
}

getProductsOfAllIntsExceptAtIndex(arr);
getProductsOfAllIntsExceptAtIndex(arr2);
