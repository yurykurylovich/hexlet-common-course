const fs = require('fs')
const promises = fs.promises;
const initPromise = Promise.resolve([]);

const getTypes = (paths) => {
  return paths.reduce((acc, path) => {
    const newAcc = acc.then((contents) =>
      promises
        .stat(path)
        .then((stats) =>
          stats.isDirectory()
            ? contents.concat("directory")
            : contents.concat("file")
        )
        .catch(() => contents.concat(null))
    );
    return newAcc;
  }, initPromise)
}

const paths = [
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/README.md',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/package.json',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/yarn.lock',
  '/Users/KurylovichYury/HexletProjects/hexlet-common-course/Course-02 [Intro to JS]'
]

getTypes(paths).then(console.log)
