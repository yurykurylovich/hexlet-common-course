/* takeLast.js
Write an inner takeLast() function that returns last n characters of the argumented string reversed.
If the string is empty or shorter than the number of taken symbols, return null.
You have the function call as 'return takeLast(text, 4)', so set your inner function accordingly.
*/

// solution
const run = (str) => {
  const takeLast = (text, n) => {
    if (text === undefined || text.length < n) {
      return null;
    }
    let parts = text.slice(-n).split('');
    return parts.reverse().join('')
  }
  return takeLast(str, 4)
}

// test
console.log(run("")); // null
console.log(run("cb")); // null
console.log(run("power")); // rewo
console.log(run("hexlet")); // telx
console.log(run("kids")); // sdik
