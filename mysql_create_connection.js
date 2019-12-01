var mysql = require('mysql');

// Creating a connection to database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
});
