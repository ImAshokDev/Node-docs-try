var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql',
  database: 'khristdb'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database');

  var sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table Created');
  });
});
