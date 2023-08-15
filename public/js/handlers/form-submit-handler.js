import { renderTask } from '../render/render-task.js'

function formSumbitHandler(event, form) {
  event.preventDefault()

  const value = form.querySelector('input[name="task"]').value
  const category = form.querySelector('input[name="category"]').value

  try {
    fetch('api/new-task', {
      method: 'POST',
      body: JSON.stringify({
        category: category,
        task: value,
        checked: false
      }),
    })

  } catch (error) {
    console.error('Error:', error)
  }

}

export { formSumbitHandler }