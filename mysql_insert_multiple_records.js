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

  var sql = 'INSERT INTO developer (name, designation) VALUES ?';
  var values = [
    ['Khrist', 'CTO'],
    ['Yohan', 'Web developer'],
    ['Sri', 'BioTech']
  ];
  connection.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log(
      'Number of records inserted: ' +
        result.affectedRows +
        ', ' +
        result.insertId
    );
    console.log(result);
  });
});
