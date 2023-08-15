function renderCategory(category) {
  const element = document.createElement('li')
  element.classList.add('category-item')
  element.innerHTML = (`
      <a href=${category}>${category}</a> 
  `)

  document.querySelector('.task-list').append(element)
}

export { renderCategory }