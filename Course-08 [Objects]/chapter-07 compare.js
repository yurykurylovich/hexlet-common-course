/* compare.js
Write and export by default compare() function that takes two companies (objects) and compares its values. Return true if the companies are the same.
*/

// solution
const compare = (obj1, obj2) => {
  const keys = Object.keys(obj1);
  for (let key of keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// test
const company1 = { name: "Hexlet", website: "https://hexlet.io" };
const company2 = { name: "CodeBasics", website: "https://code-basics.com" };
console.log(compare(company1, company2)); // false

const company3 = { name: "Hexlet", website: "https://hexlet.io" };
const company4 = { name: "Hexlet", website: "https://hexlet.io" };
console.log(compare(company3, company4)); // true
