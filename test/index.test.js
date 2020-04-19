
import deliverynotes from '../src/deliverynotes'; // TODO: Fix import troubles
import Product from '../src/product'
var assert = require('assert')


let testDeliveryNotes = new deliverynotes(
  '1',
  'Kunde',
  5.5,
  3,
  false,
  new Date()
);

describe('deliverynotes', function () {
  describe('#hasPaid()', function () {
    it('has Paid should return false', function () {
      assert.equal(testDeliveryNotes.hasPaid, false);
    });
  });
  describe('#totalPrice()', function () {
    it('total Price should return 16.5', function () {
      assert.equal(testDeliveryNotes.totalPrice, 16.5);
    });
  });
});

describe('products', function () {
    describe('#getPricePerDay', function () {
        it('should return the right price per day for a set price', function () {
            let testProduct = new Product("bagger", 100, 0.05)
            assert.equal(testProduct.pricePerDay, 2280)
        });
    });
});
