import { renderFormTask } from "../forms/render-form-t.js"
import { renderTaskList } from "../task/render-task-list.js"

function renderTaskListPage(data){
  renderFormTask()
  renderTaskList(data)
}

export {renderTaskListPage}