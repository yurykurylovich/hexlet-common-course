const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const getDirectorySize = (dirPath) => fs.promises
  .readdir(dirPath)
  .then(files => files.map((file) => fs.promises.stat((path.join(dirPath, file)))))
  .then(arr => Promise.all(arr))
  .then(stats => stats.filter(stat => stat.isFile()))
  .then(filtered => _.sumBy(filtered, 'size'));

getDirectorySize('/Users/KurylovichYury/HexletProjects/hexlet-common-course').then(console.log)
