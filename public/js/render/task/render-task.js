function renderTask(task) {
  const element = document.createElement('li')
  element.classList.add('task-item')
  element.innerHTML = (`
      <span>${task.task}</span> 
      <input type="checkbox" ${task.checked ? 'checked' : ''}>
  `)

  return element
}

export { renderTask }