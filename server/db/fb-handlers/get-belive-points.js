const { db } = require('../fb.js')

async function getBelivePoints() {
  const belivePoints = await db.collection('stat').doc('points').get()
  return belivePoints.data()
}

module.exports = { getBelivePoints }