/* wordsCount.js
Write and export by default wordsCount() function that takes a string and returns the library of used words in it with the count.
*/

// solution
const _ = require('lodash')

const wordsCount = (str) => {
  const words = _.words(str.toLowerCase());
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {})
}

// test
const text = "one two three two ONE one wow";
console.log(wordsCount(text));
/*
 {
   one: 3,
   two: 2,
   three: 1,
   wow: 1,
 }
*/

const text2 = "another one sentence with strange Words words";
console.log(wordsCount(text2));
/* {
   another: 1,
   one: 1,
   sentence: 1,
   with: 1,
   strange: 1,
   words: 2,
  }
*/
