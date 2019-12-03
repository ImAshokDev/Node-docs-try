var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristObject = { name: 'AtSemiColon', address: 'vellore' };
  dbo.collection('customers').insertOne(khristObject, function(err, res) {
    if (err) throw err;
    console.log('1 document inserted');
    db.close();
  });
});
