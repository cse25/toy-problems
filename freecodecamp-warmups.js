
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

function findLongestWord(str) {
  var arr = str.split(' ').map(function(x) {
    return x.length
  })
  return Math.max.apply(null, arr)
};

findLongestWord("The quick brown fox jumped over the lazy dog");

function titleCase(str) {
  var arr = str.split(' ');
  var newArr = arr.map(function(word) {
    var firstLetter = word[0].toUpperCase();
    var wordRemainder = word.slice(1,word.length).toLowerCase();
    return firstLetter + wordRemainder;
  })
  return newArr.join(' ')
};

function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
    largest.push(Math.max.apply(null,arr[i]));
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function confirmEnding(str, target) {
  return (str.slice(str.length - target.length) === target);
}

confirmEnding("Bastian", "n");function repeatStringNumTimes(str, num) {
  var repeatedString = ''
  for (var i = 0; i < num; i++) {
    repeatedString += str
  }
  return repeatedString;
}

repeatStringNumTimes('abc', 3); // Output: 'abcabcabc'function truncateString(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + '...';
  } else if (str.length > num) {
    return str.slice(0, num - 3) + '...';
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

function chunkArrayInGroups(arr, size) {
  var solution = []
  var count = 0;
  
  while (count < arr.length) {
    solution.push(arr.slice(count, count+size));
    count += size;
  }
  
  return solution
}

chunkArrayInGroups([1,2,3,4],2); // [[1,2],[3,4]]
