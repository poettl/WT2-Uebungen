import Costumer from '../src/costumer'
import { IgnorePlugin } from 'webpack';
var assert = require('assert')

const testCostumer = () => {
    describe('Costumer', () => {
        let testCostumer = new Costumer("Max Mustermann", "Musterstrasse 10  1122 Musterstadt", "0123456789", "max.mustermann@muster.net")
        describe('#Getter', () => {
            it('should return the name of the costumer', () => {
                assert.equal(testCostumer.name, "Max Mustermann"); //if test passed "Max Mustermann" is retured
            });
            it('should return the adress of the costumer', () => {
                assert.equal(testCostumer.adress, "Musterstrasse 10  1122 Musterstadt"); //if test passed "Musterstrasse 10  1122 Musterstadt" is retured
            });
            it('should return the phone number of the costumer', () => {
                assert.equal(testCostumer.telnumber, "0123456789"); //if test passed "0123456789" is retured
            });
            it('should return the email of the costumer', () => {
                assert.equal(testCostumer.email, "max.mustermann@muster.net"); //if test passed "max.mustermann@muster.net" is retured
            }); 
        });
        describe('#setEmail', () => {
            it('should change the email of the costumer', () => {
                testCostumer.email= "musterfrau@test.com";
                assert.equal(testCostumer.email, "musterfrau@test.com");//if test passed setEmail is "musterfrau@test.com"
            });
        });
        describe('#testEmptyValue', () => {
            it('should not change the adress if empty string is passed',() => {
                testCostumer.adress= "";
                assert.notEqual(testCostumer.adress, ""); //if test passed adress is not empty
            });
        });
    });
}

export default testCostumer;