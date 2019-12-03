var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristSort = { name: 1 }; // ascending
  var yohanSort = { name: -1 }; // descending

  dbo
    .collection('developers')
    .find()
    .sort(khristSort)
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });

  dbo
    .collection('developers')
    .find()
    .sort(yohanSort)
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
