const fs = require('fs')
const path = require('path')

module.exports = passwordList

function passwordList (size) {
  const filename = path.join(__dirname, `/data/${size}.txt`)
  const rawFile = fs.readFileSync(filename).toString().trim()
  return rawFile.split(/\r?\n/)
}
