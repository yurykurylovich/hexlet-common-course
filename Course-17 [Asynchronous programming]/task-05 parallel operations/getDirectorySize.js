const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const async = require('async');

const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (err, filenames) => {
    if (err) {
      cb(err)
      return
    }
    const filePaths = filenames.map(filename => path.join(dirPath, filename))

    async.map(filePaths, fs.stat, (err, data) => {
      if (err) {
        cb(err)
        return;
      }
      const result = _.sumBy(data, (file) => file.size)
      console.log(result)
    })
  })
}

getDirectorySize('/Users/KurylovichYury/HexletProjects/hexlet-common-course', (err) => {
  console.log(err)
})

// getDirectorySize('/usr/local/bin', (err, size) => {
//   console.log(size);
// });
// Подсказка
// fs.readdir - чтение содержимого директории
// path.join - конструирует пути
// async.map
// fs.stat - информация о файле
// _.sumBy - нахождение суммы в массиве
