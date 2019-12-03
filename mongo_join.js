var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/khristdb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('khristdb');
  var ordersObjects = [{ _id: 1, product_id: 154, status: 1 }];
  dbo.collection('orders').insertMany(ordersObjects, function(err, res) {
    if (err) throw res;
    console.log('Number of documents inserted: ' + res.insertedCount);
    console.log(res);
    db.close();
  });

  var productsObjects = [
    { _id: 154, name: 'Chocolate Heaven' },
    { _id: 155, name: 'Tasty Lemons' },
    { _id: 156, name: 'Vanilla Dreams' }
  ];
  dbo.collection('products').insertMany(productsObjects, function(err, res) {
    if (err) throw res;
    console.log('Number of documents inserted: ' + res.insertedCount);
    console.log(res);
    db.close();
  });

  dbo.collection('orders').aggregate(
    [
      {
        $lookup: {
          from: 'products',
          localField: 'product_id',
          foreignField: 'id',
          as: 'orderdetails'
        }
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res);
      db.close();
    }
  );
});
