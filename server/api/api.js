const { apiNewTask } = require('./endpoints/new-task.js')
const { apiTaskList } = require('./endpoints/task-list.js')
const { apiCategoryList } = require('./endpoints/category-list.js')
const { apiDeleteCategory } = require('./endpoints/delete-category.js')
const { apiGetBelivePoints } = require('./endpoints/get-belive-points.js')
const { apiSetBelivePoints } = require('./endpoints/set-belive-points.js')


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
  "delete-category": function (req, res) {
    apiDeleteCategory(req, res)
  },
  "get-belive-points": function (req, res) {
    apiGetBelivePoints(req, res)
  },
  "set-belive-points": function (req, res) { 
    apiSetBelivePoints(req, res)
  }
}

module.exports = { api }