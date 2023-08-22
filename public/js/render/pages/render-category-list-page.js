import { renderCategoryList } from "../category/render-category-list.js"
import { renderBelivePoints } from "../elements/belive-points.js"
import { renderCategoryTaskForm } from "../forms/render-form-ct.js"

async function renderCategoryListPage() {
  history.pushState(null, '', 'index.html')
  renderCategoryTaskForm()
  renderCategoryList()
  await renderBelivePoints()

}

export {renderCategoryListPage}