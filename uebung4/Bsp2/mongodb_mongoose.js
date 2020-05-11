// ODM mongoose
var mongoose = require('mongoose');

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
var Deliverynotes = mongoose.model('Deliverynotes', DeliverynotesSchema);
var dnArray = [
  new Deliverynotes({
    customer: 2,
    price: 5,
    product: 3,
    count: 1,
    paid: true,
    date: new Date(),
  }),
  new Deliverynotes({
    customer: 1,
    price: 10,
    product: 1,
    count: 5,
    paid: false,
    date: new Date(),
  }),
  new Deliverynotes({
    customer: 10,
    price: 5,
    product: 2,
    count: 5,
    paid: false,
    date: new Date(),
  }),
  new Deliverynotes({
    customer: 1,
    price: 5,
    product: 1,
    count: 1,
    paid: false,
    date: new Date(),
  }),
  new Deliverynotes({
    customer: 1,
    price: 17,
    product: 1,
    count: 3,
    paid: true,
    date: new Date(),
  }),
];
// insert into

promarray = [];
dnArray.forEach((item) => {
  prom = item.save(function (err, x) {
    if (err) return console.error(err);
    console.log('saved');
  });
  promarray.push(prom);
});
Promise.all(promarray).then((result) => {
  readFromDb();
});

// find object

function readFromDb() {
  Deliverynotes.find(function (err, dns) {
    if (err) return console.error(err);
    console.log(dns);
  });
}
