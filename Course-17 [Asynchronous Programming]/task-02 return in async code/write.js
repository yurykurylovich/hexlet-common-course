const data = `write.js
Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о
завершении работы через переданный колбек.
import write from './writer.js';
write('./myfile', 'data', () => {
  console.log('success');
});
Подсказки:
для записи в файл используйте функцию fs.writeFile.`

const fs = require('fs')

const write = (path, callback) => {
  fs.writeFile('./readme.md', data, callback)
}

write(data, () => console.log(data))
