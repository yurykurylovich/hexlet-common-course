/* addDigits.js
Write and export by default addDigits() function that calculates the sum of digits of an argumented number to the moment when there's only one digit left.
For example, num = 38;
3 + 8 = 11 => 1 + 1 = 2
return 2
*/

// solution
const addDigits = (num) => {
  let str = Math.abs(num.toString()).toString()
  if (str.length === 1) {
    return Number(str)
  }
  let result = 0
  for (symbol of str) {
    result += Number(symbol)
  }
  return addDigits(result)
}

// test
console.log(addDigits(38)) // 2
console.log(addDigits(3)) // 3
console.log(addDigits(22)) // 4
console.log(addDigits(-22)) // 4
console.log(addDigits(4484)) // 2
console.log(addDigits(-4485)) // 3

