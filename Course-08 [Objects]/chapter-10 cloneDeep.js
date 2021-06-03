/* deepCopy.js
Write and export by default deepCopy function that creates a deep clone of the argumented object.
Your function should work like lodash _.cloneDeep, but you cannot use it.
*/

// solution
const _ = require('lodash')

const cloneDeep = (obj) => {
  const newObj = {}
  const keys = Object.keys(obj)
  for (let key of keys) {
    let value = obj[key]
    newObj[key] = _.isObject(value) ? cloneDeep(value) : value;
  }
  return newObj;
}
// test
const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру как и data
const result = cloneDeep(data);
console.log(result)
// Но внутри другие объекты
console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true
