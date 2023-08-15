const { mimeTypes } = require('../../helpers/mime-types.js')
const fs = require('fs')

function handleGetReq(req, res) {
  let { url } = req
  if (url === '/') url = '/index.html'

  try {
    const file = fs.readFileSync('public' + url)
    const ext = url.match(/\.([^.]+)$/)[1]
    const mime = mimeTypes[ext]

    res.setHeader('Content-Type', mime)
    res.end(file)

  } catch (error) {
    res.statusCode = 404
    res.end(`Not found: ${url}`)
  }
}

module.exports = { handleGetReq }