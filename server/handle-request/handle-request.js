const { mimeTypes } = require('../helpers/mime-types.js')
const { handleGetReq } = require('./handlers/handle-get-req.js')
const { handlePostReq } = require('./handlers/handle-post-req.js')
const { handleApi } = require('./handlers/handle-api.js')

async function handleRequest(req, res) {
  const { url, method } = req

  if (url.startsWith('/api')) {
    handleApi(req, res)
  }

  else if (method == 'GET') {
    handleGetReq(req, res)
  }

  else if (method == 'POST') {
    handlePostReq(req, res)
  }

}


module.exports = { handleRequest }