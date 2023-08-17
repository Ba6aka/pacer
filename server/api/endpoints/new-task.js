const { setNewTask } = require("../../db/fb-handlers/set-new-task.js")

async function apiNewTask(req) {
  const { task, category, checked } = req.body
  await setNewTask({ task, category, checked, res })
}

module.exports = { apiNewTask }