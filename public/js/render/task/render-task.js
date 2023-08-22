import { getTakeQuestButton } from "../elements/take-quest-button.js"
import { getTrashButton } from "../elements/trash-button.js"

function renderTask(task, id) {
  const element = document.createElement('li')
  const trashButton = getTrashButton()

  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task.task}| difficulty - ${task.difficulty}</span> 
  `)

  element.append(trashButton)
  element.append(getTakeQuestButton())

  return element
}

export { renderTask }