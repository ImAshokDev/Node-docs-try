// Modules as Js libraries

var http = require('http');
var khristModule = require('./khristfirstmodule');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      'Current Data and Time using khristModule: ' +
        khristModule.khristDateTime()
    );
    res.end();
  })
  .listen(8080);
