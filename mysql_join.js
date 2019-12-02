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

  var sqlCreateUsers =
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product VARCHAR(255))';
  connection.query(sqlCreateUsers, function(err, result) {
    if (err) throw err;
    console.log('Users table created with primary key');
  });
  var users = [
    [1, 'John', 154],
    [2, 'Peter', 154],
    [3, 'Amy', 155],
    [4, 'Hannah', 156],
    [5, 'Michael', 156]
  ];
  var sqlUsers = 'INSERT INTO users (id, name, favorite_product) VALUES ?';

  connection.query(sqlUsers, [users], function(err, result) {
    if (err) throw err;
    console.log(
      'Number of records inserted: ' +
        result.affectedRows +
        ' , ' +
        result.insertId
    );
    console.log(result);
  });

  var sqlCreateProducts =
    'CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))';
  connection.query(sqlCreateProducts, function(err, result) {
    if (err) throw err;
    console.log('Products table created with primary key');
  });
  var products = [
    [154, 'Chocolate Heaven'],
    [155, 'Tasty Lemons'],
    [156, 'Vanilla Dreams']
  ];
  var sqlProducts = 'INSERT INTO products (id, name) VALUES ?';

  connection.query(sqlProducts, [products], function(err, result) {
    if (err) throw err;
    console.log(
      'Number of records inserted: ' +
        result.affectedRows +
        ' , ' +
        result.insertId
    );
    console.log(result);
  });

  var sql =
    'SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id';
  // Left join
  // var sql = "SELECT users.name AS user,products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
  // Right join
  // var sql = "SELECT users.name AS user,products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log(result);
  });
});
