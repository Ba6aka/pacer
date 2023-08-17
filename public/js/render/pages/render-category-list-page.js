import { renderCategoryList } from "../category/render-category-list.js"
import { renderCategoryTaskForm } from "../forms/render-form-ct.js"

function renderCategoryTaskPage() {
  history.pushState(null, '', 'index.html')
  renderCategoryTaskForm()
  renderCategoryList()
}

export {renderCategoryTaskPage}