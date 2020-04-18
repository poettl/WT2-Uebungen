import deliverynotes from '../src/deliverynotes';

var assert = require('assert');
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
