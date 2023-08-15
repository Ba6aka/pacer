const { createServer } = require('http')
const { fs } = require('fs')
const { handleRequest } = require('../handle-request/handle-request.js')
const { db } = require('../db/fb.js')


// Start the server')
function startServer(port) {
  createServer((req, res) => {
    handleRequest(req, res)
    async function getAllCollections() {
      const collections = await db.listCollections()

      return collections
    }
    getAllCollections()
      .then(collections => {
        console.log('Collections:', collections)
      })
      .catch(error => {
        console.error('Error:', error)
      })


  }).listen(port)
}

module.exports = { startServer }
