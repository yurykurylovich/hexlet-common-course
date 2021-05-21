/* calculateSum.js
Write and export by default calculateSum() function that sums all array items that are divided by 3 with no reminder.
In case of an empty array return null.
*/

// solution
const calculateSum = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let sum = 0;
  for (let item of arr) {
    if (item % 3 === 0) {
      sum += item
    }
  }
  return sum;
}


// test
const arr = [1, 3, 4, 5, 6, 8]
console.log(arr)
console.log(calculateSum(arr))
