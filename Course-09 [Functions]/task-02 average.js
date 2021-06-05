/* average.js
Write and export by default calculateAverage() function that returns the arithmetic mean of an unknown number of numbers.
If there're no argumented numbers, return null.
*/

// solution
const average = (...nums) => {
  if (nums.length === 0) {
    return null;
  }
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  return sum / nums.length;
}
// test
console.log(average(0)); // 0
console.log(average(0, 10)); // 5
console.log(average(-3, 4, 2, 10)); // 3.25
console.log(average()); // null
