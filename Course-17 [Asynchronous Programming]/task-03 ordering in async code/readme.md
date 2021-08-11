# Asynchronous operations order
## compareFileSizes.js

Реализуйте и экспортируйте асинхронную функцию compareFileSizes, которая сравнивает размеры двух файлов.
Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.
```
import { compareFileSizes } from './info.js';
compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
```
Подсказка
Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
Math.sign
