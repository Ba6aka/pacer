import { renderCategoryListPage } from "./js/render/pages/render-category-list-page.js"
import { renderTaskListPage } from "./js/render/pages/render-task-list-page.js"

const searchParams = new URLSearchParams(location.search)

if (searchParams.has("id")) {
  await renderTaskListPage(searchParams.get("id"))
} else {
  await renderCategoryListPage()
}

