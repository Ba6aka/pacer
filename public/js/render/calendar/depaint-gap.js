function depaintGap(start) {
  const dates = document.querySelectorAll('.date')

  for (let i = 0; i < dates.length; i++) {
    if (i >= start) dates[i].style.background = ''
  }
}

export { depaintGap }