function getTrashButton(name) {
  const trashButton = document.createElement('button')
  const icon = document.createElement('img')

  icon.src = './img/trash-icon.svg'
  trashButton.append(icon)

  if (name) trashButton.name = name

  return trashButton
}

export { getTrashButton }