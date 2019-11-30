var fs = require('fs');

// creating a file using write method
fs.writeFile('khristDelete.txt', 'Hello khrist', function(err) {
  if (err) throw err;
  console.log('File created using write method');
});

// deleting the above created file
fs.unlink('khristDelete.txt', function(err) {
  if (err) throw err;
  console.log('Deleted the file created above');
});
