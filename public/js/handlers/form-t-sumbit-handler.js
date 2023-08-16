import { renderTaskListPage } from "../render/pages/render-task-list-page.js"

function formTaskSumbitHandler(event, id,form) {
  event.preventDefault()

  try {
    fetch('api/new-task', {
      method: 'POST',
      body: JSON.stringify({
        category: id,
        task: form.task.value,
        checked: false
      }),
    }).then(
      renderTaskListPage(id)

    )

  } catch (error) {
    console.error('Error:', error)
  }

}

export { formTaskSumbitHandler }