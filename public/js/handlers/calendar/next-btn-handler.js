import { renderCalendar } from "../../render/calendar/render-calendar.js"

function nextBtnHandler(e, currentDate, dates) {
  currentDate.setMonth(currentDate.getMonth()+1)
  dates.textContent = ''
  renderCalendar()
}

export { nextBtnHandler }