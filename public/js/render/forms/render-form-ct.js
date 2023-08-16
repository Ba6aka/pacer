function renderCategoryTaskForm() {
  const main = document.body.querySelector('main')
  const form = document.createElement('form')

  main.innerHTML = ''

  form.className = 'category-task'

  form.innerHTML = ` 
  <input required name="category" type="text" placeholder="category">
  <input required name="task" type="text" placeholder="task">
  <button type="submit">+</button>
  `

  form.onsubmit = (e) => formSumbitHandler(e, form)
  
 main.prepend(form)
}

export { renderCategoryTaskForm }