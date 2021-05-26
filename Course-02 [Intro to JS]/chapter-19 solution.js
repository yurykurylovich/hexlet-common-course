/*solution.js
Write and export by default solution() function that capitalizes every first letter of every word in a sentence.
solution('hello, world!'); // Hello, World!
*/

// solution
// const solution = (str) => {
//   let result = ''
//   for (let i = 0; i < str.length; i ++) {
//     if ( i === 0) {
//       result += str[i].toUpperCase()
//       continue
//     }
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase()
//       continue
//     }
//     result += str[i]
//   }
//   return result
// }
// alternative solution
const solution = (str) => {
  let result = `${str[0].toUpperCase()}`
  for (let i = 1; i < str.length; i ++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result;
}

// test
console.log(solution('hello, world!')); // 'Hello, World!'
console.log(solution('  hello,   world!')); // '  Hello,   World!'
console.log(solution(' many different words inside sentence')); // ' Many Different Words Inside Sentence'
