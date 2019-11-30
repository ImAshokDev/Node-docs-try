var fs = require('fs');

fs.writeFile('anotherFile.txt', 'Hello khrist', function(err) {
  if (err) throw err;
  console.log('File createdusing write method');
});
