const { getBelivePoints } = require("../../db/fb-handlers/get-belive-points")

async function apiGetBelivePoints(req, res) {
  const belivePoints = await getBelivePoints()
  res.end(JSON.stringify(belivePoints))
}

module.exports = { apiGetBelivePoints }