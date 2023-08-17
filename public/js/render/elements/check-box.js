import {taskCheckHandler} from '../../handlers/task-check-handler.js'

function getCheckBox(task,id) {
  const checkBox = document.createElement('input')
  
  checkBox.setAttribute('type', 'checkbox')
  checkBox.id = task.task
  checkBox.name = id
  task.checked ? checkBox.checked = true : checkBox.checked = false
  checkBox.onchange = (e) => taskCheckHandler(e)

  return checkBox
}

export { getCheckBox as renderCheckBox }