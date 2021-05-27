/* getTotalAmount.js
Write and export by default getTotalAmount() function that takes a money wallet as an array and returns the sum of argumented currency in that wallet.
Use break or continue.
Example:
getTotalAmount(['eur 10', 'usd 1', 'usd 10'], 'usd'); => 11
*/

// solution
const getTotalAmount = (arr, value) => {
  let result = 0;
  if (arr.length === 0) {
    return result;
  }
  for (let sum of arr) {
    const newValue = sum.split(' ');
    if (newValue[0] === value) {
      result += Number(newValue[1])
    }
  }
  return result
}

// test
const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5'];
console.log(getTotalAmount(money1, 'usd')); // 16
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money2, 'eur')); // 135
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200'];
console.log(getTotalAmount(money3, 'rub')); // 270
