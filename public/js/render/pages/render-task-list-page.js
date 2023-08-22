import { addQueryId } from "../../query-params/add-query-id.js"
import { renderCalendar } from "../calendar/render-calendar.js"
import { renderBelivePoints } from "../elements/belive-points.js"
import { renderFormTask } from "../forms/render-form-t.js"
import { renderTaskList } from "../task/render-task-list.js"

async function renderTaskListPage(id) {
  addQueryId(id)
  renderFormTask(id)
  renderTaskList(id)
  await renderBelivePoints()
  renderCalendar()
}

export { renderTaskListPage }