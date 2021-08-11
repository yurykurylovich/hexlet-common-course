const fs = require('fs');

const watcher = (filepath, interval, cb) => {
  let checkTime = Date.now();

  const checkFile = (id) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(id)
        cb(err)
        return
      }
      const { mtimeMs } = stats;
      if (checkTime - stats.mtimeMs < interval) {
        cb(null);
        return;
      }
    })
  }
  const id = setInterval(() => checkFile(id), interval)
  return id;
}


