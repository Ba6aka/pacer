import { renderCategoryList } from "../render/category/render-category-list.js"

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
    }).then(
      setTimeout(() => {
        renderCategoryList()
        form.reset()
      }, 1000)
      
    )

  } catch (error) {
    console.error('Error:', error)
  }

}

export { formSumbitHandler }