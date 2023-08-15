import { formSumbitHandler } from "./js/handlers/form-submit-handler.js"
import { renderCategoryList } from "./js/render/render-category-list.js"

renderCategoryList()

const form = document.querySelector('form')

form.onsubmit = (e) => formSumbitHandler(e, form)