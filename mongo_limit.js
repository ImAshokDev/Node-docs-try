var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  dbo
    .collection('developers')
    .find()
    .limit(2)
    .toArray(function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    });
});
