// task
/*
  Реализуйте и экспортируйте по умолчанию функцию swap,
  которая меняет местами два элемента относительно переданного индекса.
  Например, если передан индекс 5, то функция меняет местами элементы,
  находящиеся по индексам 4 и 6.
  Параметры функции: Массив, Индекс.
  Если хотя бы одного из индексов не существует, функция возвращает исходный массив.
  import swap from './arrays';
  const names = ['john', 'smith', 'karl'];
  const result = swap(names, 1);
  console.log(result); // => ['karl', 'smith', 'john']
  const result = swap(names, 2);
  console.log(result); // => ['john', 'smith', 'karl']
  const result = swap(names, 0);
  console.log(result); // => ['john', 'smith', 'karl']
*/


// solution
const swap = (arr, index) => {
  const startIndex = index - 1;
  const endIndex = index + 1;
  if (index > 0 && index < arr.length - 1) {
    const temp = arr[startIndex]
    arr[startIndex] = arr[endIndex]
    arr[endIndex] = temp
    return arr;
  }
  return arr;
}


// testing
const names1 = ['john', 'smith', 'karl'];
const names2 = ['john', 'smith', 'karl'];
const names3 = ['john', 'smith', 'karl'];
const names4 = ['john', 'smith', 'karl', 'paul'];

const result1 = swap(names1, 1);
console.log(result1); // => ['karl', 'smith', 'john']
const result2 = swap(names2, 2);
console.log(result2); // => ['john', 'smith', 'karl']
const result3 = swap(names3, 0);
console.log(result3); // => ['john', 'smith', 'karl']
const result4 = swap(names4, 1);
console.log(result4); // => ['john', 'smith', 'karl']
