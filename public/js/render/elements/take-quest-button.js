function getTakeQuestButton() {
  const button = document.createElement('button')
  button.className = ('take-quest')
  button.textContent = 'Take quest'

  return button
}

export { getTakeQuestButton }