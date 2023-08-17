import { renderCategoryTaskPage } from "./js/render/pages/render-category-list-page.js"
import { renderTaskListPage } from "./js/render/pages/render-task-list-page.js"


if (window.location.href.includes('id')) {
  const url = new URL("http://localhost:1508/index.html?id=homework")
  const id = url.searchParams.get("id");
  renderTaskListPage(id)
} else {
  renderCategoryTaskPage()
}
