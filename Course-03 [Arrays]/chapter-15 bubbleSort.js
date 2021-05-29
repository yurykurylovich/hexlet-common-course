/*
Algorithms — Bubble Sort
*/

// solution
const bubbleSort = (arr) => {
  const stepsCount = arr.length -1;
  let swapped;
  do {
    swapped = false
    for (let i = 0; i < stepsCount; i ++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
        swapped = true
      }
    }
  } while (swapped)
  return arr;
}
// test
console.log(bubbleSort([1, 0, 6, 3, 7, 2, 10])); // [0, 1, 2, 3, 6, 7, 10]
console.log(bubbleSort([])); // []
console.log(bubbleSort([10, 1, 3])); // [1, 3, 10]
console.log(bubbleSort([0, 4, 0, 10, -3])); // [-3, 0, 0, 4, 10]
