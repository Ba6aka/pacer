import { renderFormTask } from "../../render/forms/render-form-t.js"
import { renderTaskListPage } from "../../render/pages/render-task-list-page.js"
import { renderTaskList } from "../../render/task/render-task-list.js"

function categoryListHandler(e) {
  if (!e.target.name) return

  renderTaskListPage(e.target.name)

}

export { categoryListHandler }