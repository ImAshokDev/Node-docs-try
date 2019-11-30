// NodeJs perfect for event-driven application

// ReadStream object fires an event when opening and closing a file

var fs = require('fs');
var rs = fs.createReadStream('eventReadingFile.txt');
rs.on('open', function() {
  console.log('The file is open');
});
