/*isBracketStructureBalanced.js
Write and export by default isBracketStructureBalanced() function that takes a string of different brackets and checks if this string is correct === all brackets are balanced (paired and closed correctly).
Every opening bracket should have its closing pair. Opening one is always in front.
*/

// solution
const openingSymbols = ['(', '{', '<', '['];
const closingSymbols = [')', '}', '>', ']'];

const isBracketsBalanced = (str) => {

  const newArr = [];

  for (let symbol of str) {
    if (openingSymbols.includes(symbol)) {
      newArr.push(symbol)
    } else {
      const index = closingSymbols.indexOf(symbol)
      const pairSymbol = openingSymbols[index]
      if (newArr.pop(pairSymbol) !== pairSymbol) return false
    }
  }
  return newArr.length === 0;
}
// test
const str = '()';
console.log(isBracketsBalanced(str)); // true

const str2 = '[()]';
console.log(isBracketsBalanced(str2)); // true

const str3 = '({}[])';
console.log(isBracketsBalanced(str3)); // true

const str4 = '(<><<{[()]}>>)';
console.log(isBracketsBalanced(str4)); // true

const str5 = '';
console.log(isBracketsBalanced(str5)); // true

const str6 = '((';
console.log(isBracketsBalanced(str6)); // false

const str7 = '[[()]';
console.log(isBracketsBalanced(str7)); // false

const str8 = '({}}[]';
console.log(isBracketsBalanced(str8)); // false

const str9 = '(<><<{[()]}>>>)';
console.log(isBracketsBalanced(str9)); // false

const str10 = '}';
console.log(isBracketsBalanced(str10)); // false

const str11 = '([)]';
console.log(isBracketsBalanced(str11)); // false

const str12 = '([))';
console.log(isBracketsBalanced(str12)); // false
