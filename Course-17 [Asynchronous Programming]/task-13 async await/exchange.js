const fs = require('fs');

const exchange = async (path1, path2) => {
  try {
    const reading1 = fs.promises.readFile(path1);
    const reading2 = fs.promises.readFile(path2);
    const [data1, data2] = await Promise.all([reading1, reading2])
    const writing1 = fs.promises.writeFile(path2, data1)
    const writing2 = fs.promises.writeFile(path1, data2)
    Promise.all([writing1, writing2])
  } catch (e) {
    console.log(e)
    throw e;
  }
}

exchange(
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-13 async await/test1.js',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-13 async await/test2.js'
)
