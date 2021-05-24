/*smallestDivisor.js
Write smallestDivisor function using iterative process.
Your function should return the smallest prime divisor of num > 0.
The smallest divisor is always more than 1 (obviously) besides num = 1;
*/

// solution
const smallestDivisor = (num) => {
  if (num === 1) return num
  const iter = (number, acc) => {
    if (number % acc === 0) {
      return acc;
    }
    return iter(number, acc + 1)
  }
  return iter(num, 2)
}

// test
console.log(smallestDivisor(1)); // 1
console.log(smallestDivisor(3)); // 3
console.log(smallestDivisor(4)); // 2
console.log(smallestDivisor(8)); // 2
console.log(smallestDivisor(9)); // 3
console.log(smallestDivisor(17)); // 17
console.log(smallestDivisor(15)); // 3
console.log(smallestDivisor(121)); // 11
