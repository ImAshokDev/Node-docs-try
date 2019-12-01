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

  var sql =
    "INSERT INTO customers (name, address) VALUES ('atsemicolon', 'vellore')";

  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');
  });
});
