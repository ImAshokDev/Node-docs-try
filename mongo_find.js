// Find or FindOne or FindAll methods to find data in a collection
// Just like the select statement in a mysql db

var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

// Finding first document in the developer's collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo
    .collection('developers')
    .find({}, { name: true })
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Finding all documents in the developer's collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo
    .collection('developers')
    .find({})
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});

// Finding some documents in the developer's collection
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo
    .collection('developers')
    .find({}, { _id: false, name: true, designation: true })
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      console.log(res.designation);
      db.close();
    });
});
