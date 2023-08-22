import { setBelivePoints } from "../../handlers/belive-points/set-belive-points.js"
import { getBelivePoints } from "../../handlers/belive-points/get-belive-points.js"

async function renderBelivePoints() {
  let belivePoints = await getBelivePoints()

  if (!belivePoints) {
    await setBelivePoints()
    belivePoints = setTimeout(async () => {
      await getBelivePoints()
    }, 1000)
  }

  const h2 = document.createElement('h2')
  h2.className = 'belive-points'
  h2.textContent = `Confidence Points: ${belivePoints}`

  document.querySelector('main').prepend(h2)
}

export { renderBelivePoints }
