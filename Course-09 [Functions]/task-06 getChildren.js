/* getChildren.js
Write and export by default getChildren() function that takes a list of users and returns a flattened list of their children.
*/

// solution
const getChildren = (users) => {
  return users.map(user => user.children).flat();
}
// test
const users = [
  {
    name: "Tirion",
    children: [{ name: "Mira", birthday: "1983-03-23" }],
  },
  { name: "Bronn", children: [] },
  {
    name: "Sam",
    children: [
      { name: "Aria", birthday: "2012-11-03" },
      { name: "Keit", birthday: "1933-05-14" },
    ],
  },
  {
    name: "Rob",
    children: [{ name: "Tisha", birthday: "2012-11-03" }],
  },
];

console.log(getChildren(users));
/* [
    { name: 'Mira', birthday: '1983-03-23' },
    { name: 'Aria', birthday: '2012-11-03' },
    { name: 'Keit', birthday: '1933-05-14' },
    { name: 'Tisha', birthday: '2012-11-03' },
 ]
*/
