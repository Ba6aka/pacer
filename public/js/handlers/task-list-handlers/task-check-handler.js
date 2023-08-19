function taskCheckHandler(e) {
  fetch('/api/new-task', {
    method: 'POST',
    body: JSON.stringify({
      category: e.target.name,
      task: e.target.id,
      checked: e.target.checked
    })
  })
}

export {taskCheckHandler}