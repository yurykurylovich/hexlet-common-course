/*arrays.js
Write and export getWeekends() function that returns an array of two elements - days of weekend.
Function takes one parameter - a format, 'long' - saturday, sunday (by default), or 'short' - sat, sun.
*/

// solution
const getWeekends = (format) => {
  return format === 'long' ? ['Saturday', 'Sunday'] : ['Sat', 'Sun']
}

// test
console.log(getWeekends('long'))
console.log(getWeekends('short'))
