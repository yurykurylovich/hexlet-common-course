/*reverse.js
Write a reverse function that reverse a string in the argument:
reverse('hello, world!'); // !dlrow ,olleh
*/

// solution
const reverse = (str) => {
  let i = str.length - 1
  let newStr = ''
  while (i >= 0) {
    newStr = `${newStr}${str[i]}`
    i --
  }
  return newStr;
}


// test
console.log(reverse('cat')); // 'tac'
console.log(reverse('tac')); // 'cat'
console.log(reverse('')); // ''
console.log(reverse('aaaa')); // 'aaaa'
console.log(reverse('Lorem ipsum dolor sit amet.')); //.tema tis rolod muspi meroL
