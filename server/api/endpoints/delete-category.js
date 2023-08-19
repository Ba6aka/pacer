const { deleteCollection } = require("../../db/fb-handlers/delete-category.js")

async function apiDeleteCategory(req, res) {
  const { id } = req.body

  await deleteCollection(id)
}

module.exports = { apiDeleteCategory }