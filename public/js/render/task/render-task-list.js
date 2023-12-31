import { renderTask } from "./render-task.js"
import { getTaskListHeader } from "./task-list-header.js"

async function renderTaskList(id) {
  const response = await fetch(`/api/task-list`, {
    method: 'POST',
    body: JSON.stringify({ id }),
  })

  const data = await response.json()

  const main = document.querySelector('main')
  const parent = document.createElement('ul')
  parent.className = 'task-list'


  data.forEach(task => {
    parent.append(renderTask(task, id))
  })

  main.append(parent)
}

export { renderTaskList }