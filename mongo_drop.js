var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

// drop method to delte a table or collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo.collection('customers').drop(function(err, deleted) {
    if (err) throw err;
    if (deleted) console.log('Collection deleted');
    db.close();
  });
});

// dropCollection method to delete a collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo.dropCollection('developers', function(err, deleted) {
    if (err) throw err;
    if (deleted) console.log('Collection deleted');
    db.close();
  });
});
