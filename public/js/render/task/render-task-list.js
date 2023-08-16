import { renderTask } from "./render-task.js"

function renderTaskList(data) {
  const main = document.querySelector('main')
  const parent = document.createElement('ul')

  parent.className = 'task-list'
  

  data.forEach(task => {
    parent.append(renderTask(task))
  })

  main.append(parent)
}

export { renderTaskList }