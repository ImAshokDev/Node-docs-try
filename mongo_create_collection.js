// Collection is like table

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo.createCollection('customers', function(err, res) {
    if (err) throw err;
    console.log('Collection created');
    db.close();
  });
});
