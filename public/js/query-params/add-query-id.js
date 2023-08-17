function addQueryId(id) {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set('id', id)
  const newPath = window.location.pathname + '?' + searchParams.toString()
  history.pushState(null, '', newPath)
}

export { addQueryId }
