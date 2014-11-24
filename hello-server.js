/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');
});

server.listen(8080, function() {
    console.log('Server is listening at http://localhost:8080');
});