
function formSumbitHandler(event, form) {
  event.preventDefault()

  try {
    fetch('api/new-task', {
      method: 'POST',
      body: JSON.stringify({
        category: form.category.value,
        task: form.task.value,
        checked: false
      }),
    })

  } catch (error) {
    console.error('Error:', error)
  }

}

export { formSumbitHandler }