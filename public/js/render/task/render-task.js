import { renderCheckBox } from "../elements/check-box.js"
import { getTrashButton } from "../elements/trash-button.js"

function renderTask(task, id) {
  const element = document.createElement('li')
  const trashButton = getTrashButton()

  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task.task}</span> 
  `)

  element.append(renderCheckBox(task, id))
  element.append(trashButton)
  return element
}

export { renderTask }