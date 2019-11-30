var fs = require('fs');

// creating a file using write method
fs.writeFile('khrist.txt', 'Hello khrist', function(err) {
  if (err) throw err;
  console.log('File created using write method');
});

// renamethe above created file
fs.rename('khrist.txt', 'yohanRename.txt', function(err) {
  if (err) throw err;
  console.log('Renamed the file created above');
});
