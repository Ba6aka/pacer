import { renderCategory } from "./render-category.js"
import { categoryListHandler } from "../../handlers/category-list-handlers/category-list-handler.js"

function renderCategoryList() {
  const main =  document.querySelector('main')
  const parent = document.createElement('ul')
  parent.classList = 'category-list'
  parent.innerHTML = ''

  parent.onclick = (e) => categoryListHandler(e)

  fetch('/api/category-list')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach((item) => {
        parent.append(renderCategory(item))
      })
    })

   main.append(parent)
}

export { renderCategoryList }