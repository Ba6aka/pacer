function renderFormTask() {
  const main = document.body.querySelector('main')
  const form = document.createElement('form')

  main.innerHTML = ''

  form.className = 'task'

  form.innerHTML = ` 
  <input required name="task" type="text" placeholder="task">
  <button type="submit">+</button>
  `

  main.prepend(form)
}

export { renderFormTask }