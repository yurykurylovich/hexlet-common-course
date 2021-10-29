function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num -1)
}

console.log(factorial(4));

// Fibonacci subsequence: 1, 1, 2, 3, 5, 8, 13, etc...

function fibonacci(n) {
  if ( n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n -1) + fibonacci( n -2);
}

console.log(fibonacci(8))
