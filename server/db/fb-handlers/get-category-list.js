const { db } = require('../fb.js')

async function getCategoryList() {
  const collections = await db.listCollections()
  const collectionIds = collections.map(collection => collection.id)
  return  collectionIds
}

module.exports = { getCategoryList }