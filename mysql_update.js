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
  var sql =
    "UPDATE customers SET address = 'Chennai' WHERE address = 'Bangalore'";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows + ' record(s) updated');
  });
});
