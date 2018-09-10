var http = require('http')
var express = require('express')
var path = require('path')
var app = express()

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'index.html'))
});

var server = http.createServer(app)
server.listen(8000)
