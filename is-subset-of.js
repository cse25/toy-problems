// Make an array method that can return whether or not a context array is a subset of an input array. 
// To simplify the problem, you can assume that both arrays will contain only strings.

// First Solution
Array.prototype.isSubsetOf = function(array) {
  //duplicate checker
  var uniq = array.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  
  var numToBeFound = this.length;
  var foundCount = 0;
  for (var i = 0; i < uniq.length; i++) {
    console.log(uniq[i]);
    for (j = 0; j < this.length; j++) {
      console.log(this[j]);
      if (this[j] === uniq[i]) {
        console.log('found');
        foundCount++;
      }
    }
  }
  if (numToBeFound === foundCount) {
    return true;
  } else {
    return false;
  }
};

// Second Solution
Array.prototype.isSubsetOf = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].indexOf(this)) {
      return true;
    }
  }
}
