// docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest
import mysql from 'mysql';
import Sequelize from 'sequelize';
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

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
});
function runSQLCommand(connection, sql) {
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
      console.log(result);
    }
  });
}
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  let dn1 = new Deliverynotes(1, 10.0, 1, false, new Date(), 1);

  var sqlInsert = `INSERT INTO test.deliverynotes (customer, price, count, date, product) VALUES (${
    dn1.customer
  },${dn1.price},${dn1.count},'${dn1.date
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ')}',${dn1.product})`;
  runSQLCommand(connection, sqlInsert);

  var sqlSelect = 'SELECT * FROM test.deliverynotes';
  runSQLCommand(connection, sqlSelect);
  connection.end();
});

const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

var deliverynotesSequelize = sequelize.define('ormtable', {
  customer: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  product: Sequelize.INTEGER,
  count: Sequelize.INTEGER,
  paid: Sequelize.BOOLEAN,
  date: Sequelize.DATE,
});

sequelize
  .sync()
  .then(function () {
    return deliverynotesSequelize.create({
      customer: 1,
      price: 10,
      product: 5,
      count: 8,
      paid: true,
      date: new Date(),
    });
  })
  .then(function (result) {
    sequelize
      .query('SELECT * FROM ormtables', { type: sequelize.QueryTypes.SELECT })
      .then(function (result) {
        console.log(result);
      });
  });
