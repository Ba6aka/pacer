const { createServer } = require('http')
const { handleRequest } = require('../handle-request/handle-request.js')

// Start the server')
function startServer(port) {
  createServer((req, res) => {
    handleRequest(req, res)

  }).listen(port)
}

module.exports = { startServer }
