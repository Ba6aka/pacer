function getTrashButton(name) {
  const trashButton = document.createElement('button')
  const icon = document.createElement('img')

  icon.src = './img/trash-icon.svg'
  trashButton.append(icon)
  trashButton.className = 'trash-button'
  if (name) trashButton.name = name

  return trashButton
}

export { getTrashButton }