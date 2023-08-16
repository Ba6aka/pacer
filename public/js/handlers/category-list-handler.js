import { renderTaskList } from "../render/render-task-list.js"

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
      .then(data => {
        renderTaskList(data)
      })

  } catch (error) {
    console.error('Error:', error)
  }

}

export { categoryListHandler }