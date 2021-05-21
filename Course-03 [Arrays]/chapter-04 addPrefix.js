/*
  Реализуйте и экспортируйте по умолчанию функцию,
  которая принимает на вход массив и строковой префикс,
  и возвращает новый массив, в котором к каждому элементу
  исходного массива добавляется переданный префикс.
  Функция предназначена для работы со строковыми элементами.
  После префикса автоматически добавляется пробел.
  import addPrefix from './arrays';
  const names = ['john', 'smith', 'karl'];
  const newNames = addPrefix(names, 'Mr');
  console.log(newNames);
  // => ['Mr john', 'Mr smith', 'Mr karl'];
  console.log(names); // Старый массив не меняется!
  const names = ['john', 'smith', 'karl'];
*/

const addPrefix = (arr, prefix) => {
  const newArr = []
  for (const item of arr) {
    newArr.push(prefix + ' ' + item)
  }
  return newArr;
}

// testing
const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mister');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
console.log(names); // Старый массив не меняется!
// const names = ['john', 'smith', 'karl'];
console.log(names, '')
