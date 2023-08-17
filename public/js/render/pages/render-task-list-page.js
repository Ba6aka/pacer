import { addQueryId } from "../../query-params/add-query-id.js"
import { renderFormTask } from "../forms/render-form-t.js"
import { renderTaskList } from "../task/render-task-list.js"

function renderTaskListPage(id) {
  addQueryId(id)
  renderFormTask(id)
  renderTaskList(id)
}

export { renderTaskListPage }