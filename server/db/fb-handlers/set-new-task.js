const { db } = require('../fb.js')

async function setNewTask({ task, category, checked, res, difficulty }) {
  await db.collection(category).doc(task).set({
    task, checked, difficulty: difficulty
  })

  res.end('task added')
}



module.exports = { setNewTask }