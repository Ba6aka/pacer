async function setBelivePoints() {
  const belivePoints = prompt("On a scale of one to ten, how much do you believe in yourself?")

  await fetch('api/set-belive-points', {
    method: 'POST',
    body: JSON.stringify({
      belivePoints
    })
  })
}

export { setBelivePoints }