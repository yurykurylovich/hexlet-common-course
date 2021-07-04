
const fs = require('fs')
const path = require('path')

const compareFileSizes = (file1, file2, callback) => {
  fs.stat(file1, (err, data1) => {
    fs.stat(file2, (err, data2) => {
      const result = Math.sign(data1.size - data2.size)
      callback(null, result)
    })
  })
}

compareFileSizes('./compareFileSizes.js', './readme.md', (_error, result) => console.log(result))

// const getFileOwners = (dirpath, cb) => {
//   fs.readdir(dirpath, (_error1, filenames) => {
//     const readFileStat = (items, result = []) => {
//       if (items.length === 0) {
//         // Обработку ошибок пока не рассматриваем
//         cb(null, result);
//         return;
//       }
//       const [first, ...rest] = items;
//       console.log(items)
//       const filepath = path.join(dirpath, first);
//       fs.stat(filepath, (_error2, stat) => {
//         readFileStat(rest, [...result, { filename: first, owner: stat.uid }]);
//       });
//     };
//     readFileStat(filenames);
//   });
// };
//
// getFileOwners('../task-03 compareFileSizes.js', (error, data) => {console.log(data)})
