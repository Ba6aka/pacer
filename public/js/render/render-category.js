function renderCategory(category) {
  const element = document.createElement('li')
  element.classList.add('category-item')
  element.innerHTML = (`
      <button id=${category}>${category}</button> 
  `)

  document.querySelector('.category-list').append(element)
}

export { renderCategory }