import { renderCategoryList } from "../category/render-category-list.js"
import { renderCategoryTaskForm } from "../forms/render-form-ct.js"

function renderCategoryListPage() {
  history.pushState(null, '', 'index.html')
  renderCategoryTaskForm()
  renderCategoryList()
}

export {renderCategoryListPage}