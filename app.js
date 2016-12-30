
var http = require('http');
var express = require('express');
var mainimg = require('./route/mainimg');

let app = express();

app.use(express.static('public'));
app.use('/mainImage',mainimg);

var server = http.createServer(app);
server.listen(3000);