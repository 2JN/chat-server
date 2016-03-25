'use strict'

const http = require('http')

//command = PORT = 8080 node server.js
const port = process.env.PORT || 8080

const server = http.createServer(onRequest)

server.listen(port, onListening)

function onRequest(req, res){
    res.end("Hello node.js")
}

function onListening(){
    console.log('Server running in port ' + port)
}
