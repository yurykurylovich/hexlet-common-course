import node from "../../Course-27 [Polymorphism]/task-01 parametric polymorphism/Node.js";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function binarySearch(arr, item) {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    let middle = Math.floor((low + high) / 2);
    let guess = array[middle]
    if (guess === item) return middle;
    else if (guess < item) {
      low = middle;
    } else {
      high = middle;
    }
  }
}

console.log(binarySearch(array, 8))

