/*sequenceSum.js
Using recursion, write sequenceSum function that determines an average of a sequence of integers.
Begin and end are the starting and the last number of the sequence.
EG: begin = 2 & end = 6 => 2 + 3 + 4 + 5 + 6 = 20.
Note that:
-- If begin > end, your function should return NaN
-- If begin === end, result should be equal to begin (or end)
*/

// solution
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin
  }
  return begin + sequenceSum(begin + 1, end)
}


// test
console.log(sequenceSum(4, 3))
console.log(sequenceSum(3, 3))
console.log(sequenceSum(1, 4))
