var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

// Using an object to filter
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var query = { designation: 'CTO' };
  dbo
    .collection('developers')
    .find(query)
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Using regular expression to filter
// Regular expressions can only br used to query strings
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var query = { designation: /^A/ };
  dbo
    .collection('developers')
    .find(query)
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
