// NPM - Node Package Manager
// Downloading and installing a package "npm install package_name"

// Install "npm install upper-case"
// Npm creates a node_modules folder where the installed package is placed, all packages in the future will be placed here
// And package-lock.json file generated

// Using the installed package

var khrist = require('upper-case');

var http = require('http');
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(khrist('Hello khrist'));
    res.end();
  })
  .listen(8080);
