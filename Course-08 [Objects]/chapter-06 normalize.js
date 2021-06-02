/* modification.js
Write and export by default function that takes an object with the name and the description of the lesson and returns the modified object:
-- the name should be capitalized
-- the description should be of lower case.
*/

// solution
const _ = require('lodash')
const normalize = (obj) => {
  obj.name = _.capitalize(obj.name)
  obj.description = _.toLower(obj.description)
  return obj;
}



// test
const lesson = { name: "intro", description: "about Something" };
console.log(normalize(lesson));
/* {
  name: 'Intro',
  description: 'about something'
}
*/

const lesson2 = { name: "", description: "Some Description" };

console.log(normalize(lesson2));
/* {
  name: '',
description: 'some description'
}
*/
