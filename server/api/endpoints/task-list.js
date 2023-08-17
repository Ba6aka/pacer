const { getTaskList } = require("../../db/fb-handlers/get-task-list")

async function apiTaskList(req, res) {
  const taskList = await getTaskList(req.body.id)
  res.end(JSON.stringify(taskList))
}

module.exports = { apiTaskList }