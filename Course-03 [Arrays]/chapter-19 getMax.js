/* getMax.js
Write and export getMax() function that returns max value of the array.
Use destructuring and rest parameter.
*/

// solution
const getMax = (arr) => {
  if (!arr.length) return null;
  let [x, ...items] = arr;
  for (let item of items) {
    if (item > x) {
      x = item;
    }
  }
  return x;
}

// test
console.log(getMax([])); // null
console.log(getMax([1, 10, 8])); // 10
console.log(getMax([11, -3, 8, 1])); // 11
