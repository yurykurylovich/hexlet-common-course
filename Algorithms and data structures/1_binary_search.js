const array = [0,1,2,3,4,5,6,7,8,9,10,11,22,23,54,85]
let count = 0;
// -- Simple binary search
function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1 // для подсчета количества итераций
    middle = Math.floor((start + end)/2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle -1
    } else {
      start = middle + 1
    }
  }
  return position;
}

console.log(binarySearch(array, 10))
console.log(count)


// -- Recursive binary search
let recursiveCount = 0;
function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  recursiveCount += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end)
  }
}

console.log("recursiveSearchResult = ",recursiveBinarySearch(array, 54, 0, array.length))


