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
    'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Table altered');
  });
});
