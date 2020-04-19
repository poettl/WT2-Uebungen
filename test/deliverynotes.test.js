import deliverynotes from '../src/deliverynotes';
var assert = require('assert');

const testDelivernotes = () => {
  describe('Delivery Notes', function () {
    let testDN = new deliverynotes('1', 'Kunde', 5.5, 3, false, new Date());
    describe('#hasPaid', function () {
      it('has Paid should return false', function () {
        assert.equal(testDN.hasPaid, false);
      });
    });
    describe('#totalPrice', function () {
      it('total Price should return 16.5', function () {
        assert.equal(testDN.totalPrice, 16.5);
      });
    });
  });
};

export default testDelivernotes;
