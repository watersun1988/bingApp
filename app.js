
var http = require('http');
var express = require('express');

let app = express();

app.use(express.static('public'));

var server = http.createServer(app);
server.listen(3000);