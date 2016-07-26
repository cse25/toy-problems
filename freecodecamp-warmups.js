
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

