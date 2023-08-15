function renderTask(task) {
  const element = document.createElement('li')
  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task}</span> 
      <input type="checkbox">
  `)

  document.querySelector('.task-list').append(element)
}

export { renderTask }