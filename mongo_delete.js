var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

// deleteOne method to delete a record
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristQuery = { address: 'Bangalore' };
  dbo.collection('customers').deleteOne(khristQuery, function(err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    db.close();
  });
});

// deleteMany method to delete many records
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var yohanQuery = { designation: /^C/ };
  dbo.collection('developers').deleteMany(yohanQuery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + ' document(s) deleted');
    db.close();
  });
});
