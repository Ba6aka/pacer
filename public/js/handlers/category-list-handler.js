import { renderFormTask } from "../render/forms/render-form-t.js"
import { renderTaskListPage } from "../render/pages/render-task-list-page.js"
import { renderTaskList } from "../render/task/render-task-list.js"

function categoryListHandler(e) {
  if (!e.target.id) return

  try {
    fetch('api/task-list', {
      method: 'POST',
      body: JSON.stringify({
        id: e.target.id
      }),
    })
      .then(res => res.json())
      .then((data) => {
        renderTaskListPage(data)
      })

  } catch (error) {
    console.error('Error:', error)
  }

}

export { categoryListHandler }