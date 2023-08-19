import { renderCategoryListPage } from "../../render/pages/render-category-list-page.js"

function categoryListtrashButtonHandler(e) {
  console.log(e.target.parentElement)
  if (e.target.parentElement.parentElement.classList.contains('category-item')) {
    fetch('api/delete-category', {
      method: 'POST',
      body: JSON.stringify({ id: e.target.parentElement.name })
    }).then(
      setTimeout(() => { renderCategoryListPage() }, 1000)
    )
  }
}

export { categoryListtrashButtonHandler}