const { getBody } = require('../../js/get-body.js')
const { api } = require('../../api/api.js')

async function handleApi(req, res) {
  if (req.method == 'POST') req.body = await getBody(req)

  const endPoint = req.url.split('/')[2]

  api[endPoint](req, res)
}

module.exports = { handleApi }