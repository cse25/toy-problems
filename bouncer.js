function bouncer(arr) {
  return arr.filter(function(item) {
    if (item !== false) {
      return item;
    }
  })
}

bouncer([7, "ate", "", false, 9]);
