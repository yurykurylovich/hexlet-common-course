const fs = require('fs');
const async = require('async');

const unionFiles = (inputPath1, inputPath2, outputPath, cb) =>
  async.waterfall(
    [
      (cb) => {
        fs.readFile(inputPath1, (err1, data1) => cb(err1, data1));
      },
      (data1, cb) => {
        fs.readFile(inputPath2, (err2, data2) => cb(err2, data1, data2));
      },
      (data1, data2, cb) => {
        fs.writeFile(outputPath, `${data1}${data2}`, (err3, result) =>
          cb(err3, result)
        );
      },
    ],
    cb
  );

unionFiles(
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-07 event loop/file1.js',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-07 event loop/file2.js',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-07 event loop/result.js',
  (...params) => console.log('Done!')
  )

