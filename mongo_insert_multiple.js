var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristObj = [
    { name: 'khrist', address: 'highway 71' },
    { name: 'yohan', address: 'vellore' },
    { name: 'deva', address: 'kanchipuram' }
  ];
  dbo.collection('customers').insertMany(khristObj, function(err, res) {
    if (err) throw err;
    console.log('Number of documents inserted: ' + res.insertedCount);
    db.close();
  });
});
