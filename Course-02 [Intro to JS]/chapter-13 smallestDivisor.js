/*smallestDivisor.js
Write smallestDivisor function using while loop, variables and constants.
Your function should return the smallest prime divisor of num.
The smallest divisor is always more than 1 (obviously) besides num = 1;
If num < 1, return NaN.
*/

// sloution
const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN
  }
  if (num === 1) {
    return 1;
  }
  let i = 2
  while (num % i !== 0) {
    i ++
  }
  return i;
}


// test
console.log(smallestDivisor(-3)); //  NaN
console.log(smallestDivisor(0)); //  NaN
console.log(smallestDivisor(1)); //  1
console.log(smallestDivisor(4)); //  2
console.log(smallestDivisor(121)); //  11
console.log(smallestDivisor(3)); //  3
console.log(smallestDivisor(8)); //  2
console.log(smallestDivisor(9)); //  3
console.log(smallestDivisor(17)); //  17
console.log(smallestDivisor(15)); //  3
