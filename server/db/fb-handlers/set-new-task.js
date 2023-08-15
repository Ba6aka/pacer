const { db } = require('../fb.js')

async function setNewTask({ task, category, checked, res }) {
  await db.collection(category).doc(task).set({
    task, checked
  })

  res.end('task added')
}



module.exports = { setNewTask }