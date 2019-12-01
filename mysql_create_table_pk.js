var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql',
  database: 'khristdb'
});

// Table creation with primary key
connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database');
  var sql =
    'CREATE TABLE developer (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), designation VARCHAR(255))';
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table Create with primary key');
  });
});
