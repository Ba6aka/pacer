import { renderCalendar } from "../../render/calendar/render-calendar.js"

function prevBtnHandler(e, currentDate, dates) {
  currentDate.setMonth(currentDate.getMonth()+1)
  dates.textContent = ''
  renderCalendar()
}

export { prevBtnHandler }