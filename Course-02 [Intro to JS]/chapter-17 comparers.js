/*comparers.js
Write bigLettersCount() and compare() functions:
-- bigLettersCount() returns the number of capital letters of the string.
Special symbols (like space or commas) for this task are considered capital.
-- compare() function takes two strings as arguments, first and second, and should work like this:
* If there're more capital letters in the first string, return 1;
* If there're more capital letters in the second string, return -1;
* Otherwise return 0;
*/

// solution
const bigLettersCount = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === str[i].toUpperCase()) {
      result += 1
    }
  }
  return result
}

const compare = (str1, str2) => {
  if (bigLettersCount(str1) > bigLettersCount(str2)) {
    return 1
  }
  if (bigLettersCount(str1) < bigLettersCount(str2)) {
    return -1
  }
  return 0
}

// test
console.log(bigLettersCount("Hello, World!"))
console.log(compare('AD', 'ad sd')); // 1
console.log(compare('AD', 'Ad sd')); // 0
console.log(compare('az', 'ad')); // 0
console.log(compare('Hello', 'MeOw')); // -1
console.log(compare('purr', 'KITTY!')); // -1
console.log(compare('Lo Ve', 'aa a a')); // 1
