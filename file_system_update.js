// Updating a "khristUpdate.txt" using appendFile method
var fs = require('fs');

fs.appendFile(
  'khristUpdate.txt',
  'Updated file using appendFile method \n ',
  function(err) {
    if (err) throw err;
    console.log('Updated file using appendFile method');
  }
);
