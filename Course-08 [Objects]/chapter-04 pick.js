/* pick.js
Write and export by default pick() function that takes an object and keys and return new object only with items of argumented keys.
*/

// solution
const pick = (obj, items) => {
  let newObj = {}
  const keys = Object.keys(obj);
  for (const key of items) {
    if (keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}


// test
const data1 = {};
console.log(pick(data1, [])); // {}
console.log(pick(data1, ["undefined", "another"])); // {}

const data2 = {
  user: "ubuntu",
  os: "linux",
};
console.log(pick(data2, [])); // {}
console.log(pick(data2, ["none"])); // {}
console.log(pick(data2, ["user"])); // { user: 'ubuntu' }
console.log(pick(data2, ["os", "user"])); // { os:"linux", user:"ubuntu" }

const data3 = {
  user: "ubuntu",
  os: "linux",
  virtual: false,
};
console.log(pick(data3, ["virtual"])); // { virtual: false }
console.log(pick(data3, ["os", "user", "virtual"])); // { os:"linux", user:"ubuntu", virtual:false }
