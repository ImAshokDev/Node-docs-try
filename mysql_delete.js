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
  var sql = "DELETE FROM developer WHERE designation = 'CTO'";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log('Number of records deleted: ' + result.affectedRows);
  });
});
