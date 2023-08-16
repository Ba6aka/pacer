import { renderFormTask } from "../render/forms/render-form-t.js"
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
        renderFormTask()
        renderTaskList(data)
      })

  } catch (error) {
    console.error('Error:', error)
  }

}

export { categoryListHandler }