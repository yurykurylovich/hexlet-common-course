const fs = require('fs')

const touch = (path) => fs.promises.access(path)
  .catch(() => fs.promises.writeFile(path, "This is file created by success test"));


touch(
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-09 error handling/test.js')
  .then(() => console.log('created!')
);
