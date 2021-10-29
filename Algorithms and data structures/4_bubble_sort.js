const arr = [3,0,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1,-5,23,6,2,35,6,3,32] // [0,1,1,2,3.......]
let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1]
        array[j + 1] = array[j];
        array[j] = temp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(arr))
console.log("count = ", count);
