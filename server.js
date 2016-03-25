'use strict'

const http = require('http')
//command = PORT = 8080 node server.js
const port = process.env.PORT || 8080

const server = http.createServer(function(req, res){
    res.end("Hola node.js")
})

server.listen(port, function(){
    console.log('Servidor escuchando en el puerto ' + port)
})
