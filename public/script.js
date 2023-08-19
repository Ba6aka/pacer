import { renderCategoryListPage } from "./js/render/pages/render-category-list-page.js"
import { renderTaskListPage } from "./js/render/pages/render-task-list-page.js"
import { renderBelivePoints } from "./js/render/elements/belive-points.js"

const searchParams = new URLSearchParams(location.search)

if (searchParams.has("id")) {
  renderTaskListPage(searchParams.get("id"))
} else {
  renderCategoryListPage()
}

await renderBelivePoints()