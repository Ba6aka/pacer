const { db } = require('../fb.js')

async function setBelivePoints(points) {
  await db.collection('stat').doc('points').set({
    points
  })
}



module.exports = { setBelivePoints }