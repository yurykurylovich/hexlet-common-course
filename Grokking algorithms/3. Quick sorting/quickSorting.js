let array = [916, 96, 397, 813, 232, 537, 531, 811, 524, 734];

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivotIndex = Math.floor((arr.length - 1)/2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
