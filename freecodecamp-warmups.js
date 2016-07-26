
function reverseString(str) {
  return str.split('').reverse().join('');
}

function factorialize(num) {
  if (num === 0) {
   return 1;
  }
  var array = [];
  for (var i = 1; i <= num; i++) {
   array.push(i);
  }
  return array.reduce(function(x,y) {
   return x * y;
  })
};

function palindrome(str) {
  var stringLower = str.toLowerCase();
  for (var i = 0; i < stringLower.length; i++) {
    if (stringLower[i].charCodeAt() >= 48 && stringLower[i].charCodeAt() <= 57 || stringLower[i].charCodeAt() >= 97 && stringLower[i].charCodeAt() <= 122) {
    } else {
      stringLower = stringLower.replace(stringLower[i],'');
    }
  }
  console.log(stringLower.split('').reverse().join())
  if (stringLower === stringLower.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
