import { taskCheckHandler } from "../../handlers/task-check-handler.js"

function renderTask(task, id) {
  const element = document.createElement('li')
  const input = document.createElement('input')
  input.setAttribute('type', 'checkbox')
  input.id = task.task
  input.name = id
  task.checked ? input.checked = true : input.checked = false
  input.onchange = (e) => taskCheckHandler(e)


  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task.task}</span> 
  `)

  element.append(input)
  return element
}

export { renderTask }