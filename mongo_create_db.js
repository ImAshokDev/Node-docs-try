var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb'; //2017 is port number of mongodb and username is automatically set

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database created!');
  db.close();
});
