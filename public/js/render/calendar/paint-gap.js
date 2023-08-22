function paintGap(start, finish) {
  const dates = document.querySelectorAll('.date')

  for (let i = 0; i < dates.length; i++) {
    if (i >= start && i < finish - 1) dates[i].style.background = 'pink'
  }

}

export { paintGap }