async function getBelivePoints() {
  try {
    const points = await fetch('/api/get-belive-points')
    const json = await points.json()
    return json.points
  }
  catch (err) {
    return 0
  }
}

export { getBelivePoints }