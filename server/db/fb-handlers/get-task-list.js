 const {db} = require('../fb.js')

async function getTaskList(id) {
  const collection = await db.collection(id).get()
  const taskList = []

  collection.forEach(doc => {
    taskList.push(doc.data())
  })

  return taskList
}

module.exports = {getTaskList}