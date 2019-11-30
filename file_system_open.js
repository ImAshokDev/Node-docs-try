var fs = require('fs');

// Creating a empty file using open method
fs.open('khristEmpltyFile.txt', 'w', function(err, file) {
  if (err) throw err;
  console.log('Created a empty file');
});
