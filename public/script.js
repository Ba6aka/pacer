import { formSumbitHandler } from "./js/handlers/form-submit-handler.js"
import { renderCategoryList } from "./js/render/render-category-list.js"
import { categoryListHandler } from "./js/handlers/category-list-handler.js"
renderCategoryList()

const form = document.querySelector('form')
const categoryList = document.querySelector('.category-list')

categoryList.onclick = (e) => categoryListHandler(e)
form.onsubmit = (e) => formSumbitHandler(e, form)

