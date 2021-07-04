const fs = require('fs')

const move = (previousPath, nextPath, cb) => {
  fs.readFile(previousPath, (err, data1) => {
    if (err) {
      cb(err)
      return;
    }
    fs.writeFile(nextPath, data1, (err) => {
      if (err) {
        cb(err)
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
