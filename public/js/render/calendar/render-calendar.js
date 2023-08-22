import { paintGap } from "./paint-gap.js"
import { depaintGap } from "./depaint-gap.js"
import { nextBtnHandler } from "../../handlers/calendar/next-btn-handler.js"
import { prevBtnHandler } from "../../handlers/calendar/prev-btn-handler.js"

const calendar = document.createElement('div')
calendar.className = 'calendar'
calendar.innerHTML =
  `
<div class="calendar-header">
  <button id="prev">prev month</button>
  <h2 id='month-year'>monthYear</h2>
  <button id="next">next month</button>
</div>

<ul class="days">
  <li>Mon</li>
  <li>Tue</li>
  <li>Wed</li>
  <li>Thu</li>
  <li>Fri</li>
  <li>Sat</li>
  <li>Sun</li>
</ul>

<ul class="dates">
</ul>
`

let startDay, endDay
let currentDate = new Date()


function renderCalendar() {

  document.body.querySelector('main').append(calendar)

  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  const dates = document.querySelector('.dates')
  dates.innerHTML = ''

  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const currentDay = currentDate.toLocaleString('default', { day: '2-digit' })

  document.getElementById('month-year').textContent = `${firstDay.toLocaleDateString('en-us', { month: 'long' })} ${firstDay.getFullYear()}`

  for (let i = 0; i < firstDay.getDay(); i++) {
    dates.appendChild(document.createElement('li'))
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = document.createElement('li')
    const button = document.createElement('button')

    button.className = 'date'
    button.textContent = i
    button.value = i
    button.disabled = i <= currentDay

    button.onclick = (e) => {

      if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected')
        if (e.target.value > startDay) endDay = null
        else startDay = null
      }

      else {
        e.target.classList.add('selected')
        if (startDay) endDay = e.target.value
        else startDay = e.target.value
      }

      if (startDay && endDay) paintGap(+startDay, +endDay)
      if (startDay && !endDay) depaintGap(+startDay)
    }

    date.append(button)
    dates.appendChild(date)

  }

  prevBtn.onclick = (e) => prevBtnHandler(e, currentDate, dates)
  nextBtn.onclick = (e) => nextBtnHandler(e, currentDate, dates)
}




export { renderCalendar }