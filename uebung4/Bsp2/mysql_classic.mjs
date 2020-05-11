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
