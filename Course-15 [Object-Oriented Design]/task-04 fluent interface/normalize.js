/* normalize.js
Write a normalize() function that takes an array with a list of cities with their countries, normalize its names, sorts and returns in groups by contries without duplicates.
See tests for examples.
*/

const normalize = (arr) =>
  arr
    .map(({ name, country }) => {
      name = name.toLowerCase().trim();
      country = country.toLowerCase().trim();
      return { name, country }
    })
    .sort((a, b) => a.country.localeCompare(b.country))
    .reduce((acc, { name, country }) => {
      if (acc.hasOwnProperty(country)) {
        if (acc[country].indexOf(name) < 0) {
          acc[country].push(name);
          acc[country].sort();
        }
      } else {
        acc[country] = [name];
      }
      return acc;
    }, {})

//////// TESTS
const test1 = [
  { name: "Miami", country: "usa" },
  { name: "TeL-AVIV", country: "isrAel" },
  { name: "MinsK ", country: "BELARUS" },
  { name: "JerUSAlem", country: "israel"}
];

console.log(normalize(test1));
/*
 {
   israel: [
     'jerusalem',
     'tel-aviv',
   ],
   usa: [
     'miami',
   ],
   belarus: [
     'minsk',
   ]
 }
*/
