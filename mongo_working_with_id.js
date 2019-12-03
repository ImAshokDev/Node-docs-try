// If don't specifiy _id field, then the mongodb will add by default
// MongoDB assign _id for each document with uniquie value

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var khristdb = [
    { _id: 154, name: 'Chocolate Heaven' },
    { _id: 155, name: 'Tasty Lemon' },
    { _id: 156, name: 'Vanilla Dream' }
  ];
  dbo.collection('products').insertMany(khristdb, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
