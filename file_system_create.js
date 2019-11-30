var fs = require('fs');

fs.appendFile(
  'khristFile.txt',
  'Hello Khrish! \n File Created from fs...',
  function(err) {
    if (err) throw err;
    console.log('Saved');
  }
);
