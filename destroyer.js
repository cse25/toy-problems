function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  
  return arr.filter(function(number) {
    return args.indexOf(number) === -1;
  });
}

destroyer([1,2,3],2,3)
