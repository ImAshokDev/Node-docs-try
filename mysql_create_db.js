var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql'
});

connectio.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database');
  connection.query('CREATE DATABASE khristdb', function(err, result) {
    if (err) throw err;
    console.log('Database Created');
  });
});
