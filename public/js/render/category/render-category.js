import { categoryListtrashButtonHandler } from "../../handlers/category-list-handlers/category-list-trash-button-handler.js"
import { getTrashButton } from "../elements/trash-button.js"

function renderCategory(category) {
  const element = document.createElement('li')
  element.classList.add('category-item')
  element.innerHTML = (`
      <button name=${category}>${category}</button> 
  `)

  const trashButton = (getTrashButton(category))
  trashButton.onclick = (e) => categoryListtrashButtonHandler(e)

  element.append(trashButton)
  return element
}

export { renderCategory }