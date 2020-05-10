// docker run --name some-mongo -p 27017:27017 -d mongo:latest
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/';
class Deliverynotes {
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

// save one item
// MongoClient.connect(
//   url,
//   url,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   function (err, db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     let dn1 = new Deliverynotes(1, 10.0, 1, false, new Date(), 1);
//     dbo.collection('customers').insertOne(dn1, function (err, res) {
//       if (err) throw err;
//       console.log('1 document inserted');
//       db.close();
//     });
//   }
// );
// read item
// MongoClient.connect(
//   url,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   function (err, db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection('customers').findOne({}, function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   }
// );

// ODM mongoose

mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
var DeliverynotesSchema = new mongoose.Schema({
  customer: Number,
  price: Number,
  product: Number,
  count: Number,
  paid: Boolean,
  date: Date,
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected');
  // we're connected!
});
