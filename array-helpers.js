Array.prototype.square = function() {
  var results = [];
  this.forEach(function(element) {
    results.push(element * element);
  });
  return results;
};

Array.prototype.cube = function() {
  var results = [];
  this.forEach(function(element) {
    results.push(Math.pow(element,3));
  });
  return results;
};

Array.prototype.sum = function() {
    var total = this.reduce(function(a,b) {
        return a + b;
    })
    return total;
};

Array.prototype.average = function() {
    if (this.length === 0) {
        console.log('NaN');
    } else {
        var sum = this.reduce(function(a,b) {
            return a + b;
        })
    }
    var mean = sum/this.length;
    return mean;
};

Array.prototype.even = function() {
    var evens = this.filter(function(number) {
        if (number % 2 === 0) {
            return number;
        }
    })
    return evens;
};

Array.prototype.odd = function() {
    var odds = this.filter(function(number) {
        if (number % 2 !== 0) {
            return number;
        }
    })
    return odds;
};
