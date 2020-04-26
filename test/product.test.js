import Product from '../src/product'
var assert = require('assert')

const testProduct = () => {
    describe('Product', function () {
        let testProduct = new Product("bagger", 100, 0.05)
        describe('#getPricePerDay()', function () {
            it('should calculate and return the right price per day for a set price', function () {
                assert.equal(testProduct.pricePerDay, 2280) //then it calculated the price right
            });
        });
        describe('#getPricePerWeek()', function(){
            it('should calculate and return the right price per week for a set price', function(){
                assert.equal(testProduct.pricePerWeek, 15120) //then it calculated the price right
            })
        })
    });
}

export default testProduct;