'use strict'

const http = require('http')
//command = PORT = 8080 node server.js
const port = process.env.PORT || 8080

const server = http.createServer()

server.listen(port)
