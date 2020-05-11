import Sequelize from 'sequelize';
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
