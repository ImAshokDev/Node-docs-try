var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'khristyohan',
  password: 'rootmysql',
  database: 'khristdb'
});

var desig = 'Web developer';
connection.connect(function(err) {
  if (err) throw err;
  console.log('connected to the database');
  var sql =
    'SELECT * FROM developer WHERE designation = ' + mysql.escape(desig);
  connection.query(sql, function(err, result) {
    // Another way to escaping query value using placeholder
    // var sql = "SELECT * FROM developer WHERE designation = ?";
    // connection.query(sql, [desig], function(err, result) {

    // Multiple placeholders
    var name = 'yohan';
    var desi = 'web developer';
    // var sql = "SELECT * FROM developer WHERE name = ? OR designation = ?";
    // connection.query(sql, [nam, desi], function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});
