let array = [668, 599, 828, 723, 337, 788, 515, 363, 810, 730];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIndex]) {
        minIndex = j;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp;
  }
  return arr;
}

console.log(selectionSort(array))
