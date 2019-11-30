// NodeJs has built-in http Module

var http = require('http');
var url = require('url');

//Create a server
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello khrist'); //write response to client
    res.write('\n This is the url you trying: ' + req.url);

    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.write('\n this.is the query result of url' + txt);
    res.write('\n');
    res.end(txt);
  })
  .listen(8888);
