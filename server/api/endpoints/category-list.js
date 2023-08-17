const { getCategoryList } = require("../../db/fb-handlers/get-category-list.js")

async function apiCategoryList(req, res) {
  const collectionIds = await getCategoryList()
  res.end(JSON.stringify(collectionIds))
}

module.exports = { apiCategoryList }