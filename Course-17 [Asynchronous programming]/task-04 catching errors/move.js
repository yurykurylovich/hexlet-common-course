const fs = require('fs')

const move = (previousPath, nextPath, cb) => {
  fs.readFile(previousPath, (err1, data1) => {
    if (err1) {
      cb(err1)
      return;
    }
    fs.writeFile(nextPath, data1, (err2) => {
      if (err2) {
        cb(err2)
        return;
      }
      fs.unlink(previousPath, (err) => {
        if (err) {
          cb(err)
          return
        }
      })
    })
  })
}

move('../readme.md', 'readme.md', (err) => console.log('This operation throw error!'))
