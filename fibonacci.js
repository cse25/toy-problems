function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

fibonacci(15);
