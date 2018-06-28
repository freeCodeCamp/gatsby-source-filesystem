const path = require(`path`)
const fs = require(`fs-extra`)

const ignored = [`yarn.lock`, `package-lock.json`, `node_modules`, `dist`]

function fileFinder(dir, filelist = []) {
  const items = fs.readdirSync(dir)
  items
    .filter(item => !/^\./.test(item) && !ignored.includes(item))
    .forEach(item => {
      if (fs.statSync(path.join(dir, item)).isDirectory()) {
        filelist = fileFinder(path.join(dir, item), filelist)
      } else {
        filelist.push(path.join(dir, item))
      }
    })
  return filelist
}

module.exports = fileFinder
