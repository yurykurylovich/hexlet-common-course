/* makeCompany.js
Write and export by default makeCompany() function that returns an object with company's parameters.
They are:
* Required
-- name - required and argumented as a string
-- state - 'moderating' by default
-- createdAt - current date (use Date.now())
* Not required: anyting else thar argumented as an object.
Example: make('Hexlet', { website: 'hexlet.io', state: 'published' });
=>
{
  name: 'Helxet',
  website: 'hexlet.io',
  state: 'published',
  createAt: 1600086504715,
}
*/

// solution
const make = (name, params) => {
  return {
    name: name,
    state: 'moderating',
    ...params,
    createAt: Date.now(),
  }
}

// test
console.log(make("Hexlet"));
// {
//   name: 'Helxet',
//   state: 'moderating',
//   createAt: 1600086556076
// }

console.log(make("Hexlet", { website: "hexlet.io", state: "published" }));
// {
//   name: 'Helxet',
//   website: 'hexlet.io',
//   state: 'published',
//   createAt: 1600086563215
// }
