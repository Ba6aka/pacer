
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

let currentDate = new Date()

function renderCalendar() {
  document.body.querySelector('main').append(calendar)
  
  const prevBtn = document.getElementById('prev')
  const nextBtn = document.getElementById('next')
  const dates = document.querySelector('.dates')


  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

  document.getElementById('month-year').textContent = `${firstDay.toLocaleDateString('en-us', { month: 'long' })} ${firstDay.getFullYear()}`

  for (let i = 0; i < firstDay.getDay(); i++) {
    dates.appendChild(document.createElement('li'))
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = document.createElement('li')
    date.className = 'date'
    date.textContent = i
    dates.appendChild(date)
  }

  prevBtn.onclick = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    dates.textContent = ''
    renderCalendar()
  }
  
  nextBtn.onclick = () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    dates.textContent = ''
    renderCalendar()
  }
}



export { renderCalendar }