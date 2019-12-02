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
  var sql = 'SELECT name, designation FROM developer';
  connection.query(sql, function(err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[2].designation); //log specific result
    console.log(fields);
    console.log(fields[1].name);
  });
});
