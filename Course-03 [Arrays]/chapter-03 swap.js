/* Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива.
Если массив содержит меньше двух элементов, то он возвращается как есть.
import { swap } from '../itemss';
console.log(swap([])); // []
console.log(swap([1])); // [1]
console.log(swap([1, 2])); // [2, 1]
console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']
Подсказки
Чтобы поменять местами значения, нужно использовать третью переменную */

const swap = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const temp = arr[0];
  arr[0] = arr[arr.length -1];
  arr[arr.length -1] = temp;
  return arr;
}

/* testing */
console.log(swap([])); // []
console.log(swap([1])); // [1]
console.log(swap([1, 2])); // [2, 1]
console.log(swap([1, 2, 3, 4, 5])); // [2, 1]
console.log(swap(['one', 'two', 'three'])); // ['three', 'two', 'one']
