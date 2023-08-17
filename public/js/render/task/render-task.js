import { renderCheckBox } from "../elements/check-box.js"

function renderTask(task, id) {
  const element = document.createElement('li')

  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task.task}</span> 
  `)

  element.append(renderCheckBox(task, id))
  return element
}

export { renderTask }