// task
/* Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и
располагает элементы внутри него в обратном порядке.
import { reverse } from './arrays';
const names = ['john', 'smith', 'karl'];
reverse(names);
console.log(names); // => ['karl', 'smith', 'john']
reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
Подсказки
Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний,
второй и предпоследний и так дак далее до середины.
 */


// solution
const reverse = (arr) => {
  for (i = 0, j = arr.length -1; i < j; i ++, j --) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
}


// test
const names1 = ['john', 'smith', 'karl'];
console.log(reverse(names1)); // ['karl', 'smith', 'john']

const names2 = [];
console.log(reverse(names2)); // []

const names3 = ['one', 'two'];
console.log(reverse(names3)); // ['two', 'one']

const names4 = ['john', 'smith', 'karl', 'alan', 'joe'];
console.log(reverse(names4)); // ['joe', 'alan', 'karl', 'smith', 'john']






// test
/* testing */
const testData = [1, 2, 3, 4];
console.log(testData);
console.log(reverse(testData));
// console.log(reverse2(testData));
console.log('****');

const testData2 = [1, 2, 3, 4, 5];
console.log(testData2);
console.log(reverse(testData2));
// console.log(reverse2(testData2));
console.log('****');
