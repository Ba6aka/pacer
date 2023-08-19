const { setBelivePoints } = require('../../db/fb-handlers/set-belive-points')

async function apiSetBelivePoints(req, res) {
  await setBelivePoints(req.body.belivePoints)
  res.end('belive points saved')
}

module.exports = { apiSetBelivePoints }