/* countUniqChars.js
Write and export by default countUniqChars() function that takes a string and returns the amount of the unique symbols it contains.
E.g., countUniqChars(yyy) => 1, countUniqChars(yy111yya!y) => 4 (y, 1, a, !).
*/

// solution

const countUniqChars = (str) => {
  let newStr = ''
  if (str.length === 0) {
    return 0
  }
  for (let symbol of str) {
    if (!newStr.includes(symbol)) {
      newStr += symbol
    }
  }
  return newStr.length
}
// test
const text1 = 'yyab';
console.log(countUniqChars(text1)); // 3

const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13

const text3 = '';
console.log(countUniqChars(text3)); // 0

const text4 = 'Fear cuts deeper than swords.';
console.log(countUniqChars(text4)); // 16

const text5 = '0';
console.log(countUniqChars(text5)); // 1
