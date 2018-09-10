var http = require('http')
var express = require("express")
var app = express()

app.get('/', function(request, response){
    response.sendFile('index.html')
});

var server = http.createServer(app)
server.listen(8000)