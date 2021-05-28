/* getSameCount.js
Write and export by default getSameAmount() function that takes two arrays and returns the number of the same unique items in both of them.
Same unique items: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); => 3
Use lodash's uniq to create a duplicate-free version of an array.
*/

// solution
var _ = require('lodash')

const getSameCount = (arr1, arr2) => {
  const unique1 = _.uniq(arr1);
  const unique2 = _.uniq(arr2);
  let result = 0;
  for (let num of unique1) {
    if (unique2.includes(num)) {
      result += 1
    }
  }
  return result;
}
// test
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3

// Same unique items: 4
console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1

//Same unique items: 1, 10
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2

// No same unique items
console.log(getSameCount([], [])); // 0
console.log(getSameCount([1, 2], [])); // 0
console.log(getSameCount([0], ['one', 'two'])); // 0
console.log(getSameCount([5, 3, 3], ['one', 'two'])); // 0

//Same unique items: 2
console.log(getSameCount([1, 2, 3], [2, 8, 10])); // 1

//Same unique items: 2, 8
console.log(getSameCount([1, 8, 2, 3], [2, 8, 10])); // 2

//Same unique items: 1, 3, 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2])); // 3

//Same unique items: 1
console.log(getSameCount([1, 1, 1, 2, 3], [1, 1])); // 1

//Same unique items: 2, 3
console.log(getSameCount([1, 1, 2, 3], [2, 3])); // 2
