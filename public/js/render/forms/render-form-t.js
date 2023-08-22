import { formTaskSumbitHandler } from "../../handlers/form-handlers/form-t-sumbit-handler.js"
import { renderCategoryListPage } from "../pages/render-category-list-page.js"

function renderFormTask(id) {
  const main = document.body.querySelector('main')
  const form = document.createElement('form')
  const button = document.createElement('button')

  form.className = 'task'
  form.innerHTML = ` 
  <input required name="task" type="text" placeholder="task">
  <input required name="difficulty" type="number" placeholder="difficulty">
  <button type="submit">+</button>
  `
  form.onsubmit = (e) => formTaskSumbitHandler(e, id, form)

  button.innerHTML = '&#8592;'
  button.onclick = () => {
    renderCategoryListPage()
  }

  main.innerHTML = ''

  form.prepend(button)
  main.prepend(form)
}

export { renderFormTask }