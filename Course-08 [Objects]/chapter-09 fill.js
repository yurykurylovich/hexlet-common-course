/* fill.js
Write and export by default fill() function that takes and object, the list of keys and another object.
Your function should return the new object with merged values of only the argumented keys.
If the list of keys is empty, merge all data.
*/

// solution
const fill = (obj, keys, anotherObj) => {
  if (keys.length === 0) {
    return anotherObj;
  }
  for (let key of keys) {
    if (obj[key]) {
      obj[key] = anotherObj[key]
    }
  }
  return obj;
}

// test
const object = {
  key: "value",
  key2: "value2",
};

const data = {
  key2: "value3",
  key3: "val",
  key4: "boom!",
  key: "another value",
};

console.log(fill(object, ["key2"], data));
/*
{
  key: 'value',
  key2: 'value3',
};
*/

console.log(fill(object, ["key", "key2", "key10"], data));
/*
 {
  key: 'another value',
  key2: 'value3',
};
*/

console.log(fill(object, [], data));
/*
{
  key2: 'value3',
  key3: 'val',
  key4: 'boom!',
  key: 'another value',
};
*/
