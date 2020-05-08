class Deliverynotes {
  constructor(id, customerId, price, count, paid, date, productId) {
    this.id = id;
    this.customerId = customerId;
    this.price = price;
    this.productId = productId;
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

var dmSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    customerId: { type: 'number' },
    price: { type: 'number' },
    productId: { type: 'number' },
    count: { type: 'number' },
    paid: { type: 'boolean' },
    date: { type: 'date' },
  },
  required: ['id', 'customerId', 'productId', 'price', 'count', 'paid', 'date'],
};

var Validator = require('jsonschema').Validator;
var v = new Validator();
// good
let dn1 = new Deliverynotes(1, 1, 10.0, 1, false, new Date(), 1);
let dn2 = new Deliverynotes(2, 1, 5.0, 1, false, new Date(), 1);
let dn3 = new Deliverynotes(3, 10, 1.0, 7, true, new Date(), 6);

// bad
let dn4 = new Deliverynotes(1, 1, 10.0, 1, 'hallo', new Date(), 1);
let dn5 = new Deliverynotes(1, 1, 10.0, 1, false, '1.1.70', 1);
let dn6 = new Deliverynotes(1, 1, 10.0, undefined, false, '1.1.70', 1);

console.log(v.validate(dn1, dmSchema));
console.log(v.validate(dn2, dmSchema));
console.log(v.validate(dn3, dmSchema));
console.log(v.validate(dn4, dmSchema));
console.log(v.validate(dn5, dmSchema));
console.log(v.validate(dn6, dmSchema));
