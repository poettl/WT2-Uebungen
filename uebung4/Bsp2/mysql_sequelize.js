const Sequelize = require('sequelize');
const sequelize = new Sequelize('wt', 'root', 'root', {
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
var data = [
  {
    customer: 2,
    price: 5,
    product: 3,
    count: 1,
    paid: true,
    date: new Date(),
  },
  {
    customer: 1,
    price: 10,
    product: 1,
    count: 5,
    paid: false,
    date: new Date(),
  },
  {
    customer: 10,
    price: 5,
    product: 2,
    count: 5,
    paid: false,
    date: new Date(),
  },
  {
    customer: 1,
    price: 5,
    product: 1,
    count: 1,
    paid: false,
    date: new Date(),
  },
  {
    customer: 1,
    price: 17,
    product: 1,
    count: 3,
    paid: true,
    date: new Date(),
  },
];

sequelize
  .sync()
  .then(function () {
    return deliverynotesSequelize.bulkCreate(data);
  })
  .then(function (result) {
    sequelize
      .query('SELECT * FROM ormtables', { type: sequelize.QueryTypes.SELECT })
      .then(function (result) {
        console.log(result);
      });
  });
