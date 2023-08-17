import { getTrashButton } from "../elements/trash-button.js"

function renderCategory(category) {
  const element = document.createElement('li')
  element.classList.add('category-item')
  element.innerHTML = (`
      <button name=${category}>${category}</button> 
  `)

  element.append(getTrashButton(category))
  return element
}

export { renderCategory }