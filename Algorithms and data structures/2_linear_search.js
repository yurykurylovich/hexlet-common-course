const array = [1, 4, 5, 7, 3, 55, 6, 11, 14, 76, 43]

function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 10));
console.log(linearSearch(array, 4))
