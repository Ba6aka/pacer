const { startServer } = require('./server/js/start-server.js')
const port = process.env.PORT || 1508

startServer(port)