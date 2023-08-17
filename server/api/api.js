const { apiNewTask } = require('./endpoints/new-task.js')
const { apiTaskList } = require('./endpoints/task-list.js')
const { apiCategoryList } = require('./endpoints/category-list.js')

const api = {
  "new-task": function (req, res) {
    apiNewTask(req, res)
  },
  "task-list": function (req, res) {
    apiTaskList(req, res)
  },
  "category-list": function (req, res) {
    apiCategoryList(req, res)
  },
}

module.exports = { api }