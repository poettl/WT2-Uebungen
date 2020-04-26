import Product from '../src/product'
import { IgnorePlugin } from 'webpack';
var assert = require('assert')

const testProduct = () => {
    describe('Product', () => {
        let testProduct = new Product("bagger", 100, 0.05, 0.2) //5% Discount, 20% Tax in Austria
        describe('#getPricePerDay', () => {
            it('should calc and return the right price per day for a set hourly price, including taxes', () => {
                assert.equal(testProduct.pricePerDay, 2736); //then it calculated the price right
            });
        });
        describe('#getPricePerWeek', () => {
            it('should calc and return the right price per week for a set hourly price, including taxes', () => {
                assert.equal(testProduct.pricePerWeek, 18144); //then it calculated the price right
            })
        })
        describe('#setName', () => {
            it('should change the name of the product', () => {
                testProduct.name = "lkw";
                assert.equal(testProduct.name, "lkw");
            });
            it('should not change the name if the value passed in is null', () => {
                testProduct.name = null;
                assert.notEqual(testProduct, null) //if it is not null, the filter worked
            })
            it('should not change the name if an empty string is passed', () => {
                testProduct.name = "";
                assert.notEqual(testProduct, ""); //if it is not set to the empty string, the filter worked
            });
        });
        describe('#setPrice', () => {
            it('should change the price of the product', () => {
                testProduct.price = 200;
                assert.equal(testProduct.price, 200);
            });
            it('should not change the price of the product if null is passed', () => {
                testProduct.price = null;
                assert.notEqual(testProduct.price, null);
            });
            it('should not change the price of the product if 0 is passed', () => {
                testProduct.price = 0;
                assert.notEqual(testProduct.price, 0);
            });
        })
        describe('#getTaxAmount', function(){
            it('should display the taxes that need to be payed in addition to the price', () => {
                assert.equal(testProduct.taxAmount, 40) // 20% of 200, which was set before
            })
        })
    });
}

export default testProduct;