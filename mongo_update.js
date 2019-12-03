var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristQuery = { address: 'vellore' };
  var newValues = { name: '@Semicolon', address: 'Chennai' };
  dbo
    .collection('customers')
    .updateOne(khristQuery, newValues, function(err, res) {
      if (err) throw err;
      console.log('1 document updated');
      db.close();
    });
});

// Update using set
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var yohanQuery = { address: 'Chennai' };
  var newValues = { $set: { address: 'Bangalore' } };
  dbo
    .collection('customers')
    .updateOne(yohanQuery, newValues, function(err, res) {
      if (err) throw err;
      console.log('1 document updated');
      db.close();
    });
});

// Updating records that meets the criteria
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var yohanQuery = { address: /^C/ };
  var values = { $set: { address: 'cto' } };
  dbo
    .collection('customers')
    .updateMany(yohanQuery, values, function(err, res) {
      if (err) throw err;
      console.log(res.result.nModified + ' document(s) updated');
      db.close();
    });
});
