/*squares.js
-- Write square() function that returns the square of a number;
-- Write sumOfSquares() function that returns a sum of the squares of two numbers;
-- Write squareSumOfSquares() function that returns a square of the sum of the squares of two numbers.
*/

// solution
const square = (num) => num * num
const sumOfSquares = (num1, num2) => square(num1) + square(num2)
const squareSumOfSquares = (number1, number2) => square(sumOfSquares(number1, number2))


// test
console.log(square(10)); // 100
console.log(square(20)); // 400
console.log(sumOfSquares(3, 7)); // 58
console.log(sumOfSquares(10, -9)); // 181
console.log(squareSumOfSquares(0, 0)); // 0
console.log(squareSumOfSquares(1, 1)); // 4
console.log(squareSumOfSquares(-3, 7)); // 3364
