/* takeOldest.js
Write and export by default takeOldest() function that takes a list of users and returns the oldest of them.
The number of returning users is argumented and is 1 by default.
Use lodash if necessary.
*/

// solution
const _ = require('lodash');
const takeOldest = (users, num = 1) => {
  const birthday = (user) => Date.parse(user['birthday'])
  return _.sortBy(users, birthday).slice(0, num)
}
// test
const users = [
  { name: "Tirion", birthday: "Nov 19, 1988" },
  { name: "Sam", birthday: "Nov 22, 1999" },
  { name: "Rob", birthday: "Jan 11, 1975" },
  { name: "Sansa", birthday: "Mar 20, 2001" },
  { name: "Tisha", birthday: "Feb 27, 1992" },
  { name: "Chris", birthday: "Dec 25, 1995" },
];

console.log(takeOldest(users)); // [{ name: 'Rob', birthday: 'Jan 11, 1975' }]

console.log(takeOldest(users, 2)); // [{ name: 'Rob', birthday: 'Jan 11, 1975' }, { name: 'Tirion', birthday: 'Nov 19, 1988' }]

console.log(
  takeOldest(users, 5)
); /*
[
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
]
*/
