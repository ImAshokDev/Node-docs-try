var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql',
  database: 'khristdb'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to the database!');
  var sql = 'SELECT * FROM customers LIMIT 1';
  // Starting from another position
  // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  // Short syntax
  // var sql = "SELECT * FROM customers LIMIT 2, 5";  // not just like above the numbers are reversed
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});
