const { setNewTask } = require('../../db/fb-handlers/set-new-task.js')
const { getBody } = require('../../js/get-body.js')
const { getCategoryList } = require('../../db/fb-handlers/get-category-list.js')
const {getTaskList}  = require('../../db/fb-handlers/get-task-list.js')
 

async function handleApi(req, res) {
  console.log(req.body)
  if (req.method == 'POST') req.body = await getBody(req)

  const endPoint = req.url.split('/')[2]

  switch (endPoint) {
    case 'new-task':
      const { task, category, checked } = req.body
      await setNewTask({ task, category, checked, res })
      break
    case 'category-list':
      const collectionIds = await getCategoryList()
      res.end(JSON.stringify(collectionIds))
      break

    case 'task-list':
      const taskList = await getTaskList(req.body.id)
      res.end(JSON.stringify(taskList))
      break
  }



}

module.exports = { handleApi }