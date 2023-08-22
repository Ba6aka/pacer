function getTakeQuestButton() {
  const button = document.createElement('button')
  button.className = ('take-quest')
  button.textContent = 'Take quest'

  button.onclick = () => {
    document.querySelector('.calendar').style.display = 'block'
  }
  return button
}

export { getTakeQuestButton }