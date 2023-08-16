import { renderFormTask } from "../forms/render-form-t.js"
import { renderTaskList } from "../task/render-task-list.js"

function renderTaskListPage(id){
  renderFormTask(id)
  renderTaskList(id)
}

export {renderTaskListPage}