import { renderTask } from "./render-task.js"

function renderTaskList(data) {
  const parent = document.querySelector('.category-list')
  parent.className = 'task-list'
  parent.innerHTML = ''

  data.forEach(task => {
    parent.append(renderTask(task))
  })

}

export { renderTaskList }