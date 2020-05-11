// docker run --name some-mongo -p 27017:27017 -d mongo:latest
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
class DeliverynotesClass {
  constructor(customer, price, count, paid, date, product) {
    this.customer = customer;
    this.price = price;
    this.product = product;
    this.count = count;
    this.paid = paid;
    this.date = date;
  }

  get hasPaid() {
    return this.paid;
  }

  get totalPrice() {
    return this.price * this.count;
  }
}
// classic

// create datenbank

MongoClient.connect(
  url + 'mydb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    if (err) throw err;
    console.log('Database created!');
    db.close();
  }
);

// save items
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    if (err) throw err;
    var dbo = db.db('mydb');
    var myobj = [
      new DeliverynotesClass(1, 10.0, 15, false, new Date(), 1),
      new DeliverynotesClass(2, 50.0, 15, false, new Date(), 2),
      new DeliverynotesClass(3, 11.0, 5, true, new Date(), 3),
      new DeliverynotesClass(4, 15.0, 1, false, new Date(), 4),
      new DeliverynotesClass(5, 11.0, 7, true, new Date(), 5),
    ];
    dbo.collection('deliverynotes').insertMany(myobj, function (err, res) {
      if (err) throw err;
      console.log('documents inserted');
      readFromDb();
      db.close();
    });
  }
);

// read items
function readFromDb() {
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (err, db) {
      if (err) throw err;
      var dbo = db.db('mydb');
      dbo
        .collection('deliverynotes')
        .find()
        .toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
    }
  );
}
