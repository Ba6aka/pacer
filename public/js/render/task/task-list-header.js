function getTaskListHeader() {
  const li = document.createElement('li')
  li.innerHTML = `
  <span>Task</span>
  <span>difficulty</span>
  `

  return li
}

export { getTaskListHeader }