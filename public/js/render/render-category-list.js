import { renderCategory } from "./render-category.js"

function renderCategoryList() {
  fetch('/api/category-list')
    .then(res => res.json())
    .then(data => {
      data.forEach((item) => {
        renderCategory(item)
      })
    })
}

export { renderCategoryList }