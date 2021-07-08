const fs = require('fs')

const reverse = (filepath) => {
  return fs.promises.
    readFile(filepath, "utf-8")
    .then((data1) => data1.split("\n").reverse().join("\n"))
    .then((data2) => fs.promises.writeFile(filepath, data2))
}

reverse('/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-17 [Asynchronous programming]/task-08 promises/test.js')
