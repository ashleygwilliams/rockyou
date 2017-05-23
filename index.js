const fs = require('fs')

module.exports = passwordList

function passwordList (size) {
  const filename = `./data/${size}.txt`
  const rawFile = fs.readFileSync(filename).toString().trim()
  return rawFile.split(/\r?\n/)
}
