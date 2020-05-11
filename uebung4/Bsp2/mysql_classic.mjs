// docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest
import mysql from 'mysql';
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

function runSQLCommand(sql) {
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('done');
      console.log(result);
    }
  });
}

function getSQLDate(date) {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

function getSQLStringForInsert(dn1) {
  return `${dn1.customer},${dn1.price},${dn1.count},${dn1.paid},'${getSQLDate(
    dn1.date
  )}',${dn1.product}`;
}

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  var sqlCreateDatabase = 'CREATE DATABASE IF NOT EXISTS wt;';
  var sqlCreateTable =
    'CREATE TABLE IF NOT EXISTS wt.deliverynotes (customer INTEGER, price DECIMAL, count INTEGER, paid BOOL, date DATE, product INTEGER)';
  runSQLCommand(sqlCreateDatabase);
  runSQLCommand(sqlCreateTable);
  let dn1 = new Deliverynotes(1, 15.0, 1, true, new Date(), 2);
  let dn2 = new Deliverynotes(2, 14.0, 3, false, new Date(), 3);
  let dn3 = new Deliverynotes(3, 13.0, 4, true, new Date(), 1);
  let dn4 = new Deliverynotes(4, 12.0, 5, false, new Date(), 4);
  let dn5 = new Deliverynotes(5, 14.0, 6, true, new Date(), 7);
  var sqlSelect = 'SELECT * FROM wt.deliverynotes';
  var sqlInsert = `INSERT INTO wt.deliverynotes (customer, price, count, paid, date, product) VALUES (${getSQLStringForInsert(
    dn1
  )}),(${getSQLStringForInsert(dn2)}),(${getSQLStringForInsert(
    dn3
  )}),(${getSQLStringForInsert(dn4)}),(${getSQLStringForInsert(
    dn1
  )}),(${getSQLStringForInsert(dn5)})`;
  console.log(sqlInsert);
  runSQLCommand(sqlInsert);
  runSQLCommand(sqlSelect);
  connection.end();
});
