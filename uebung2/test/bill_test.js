import bill from '../src/bill'
import { IgnorePlugin } from 'webpack';
var assert = require('assert')

const testbill = () => {
    describe('bill', () => {
        let testCostumer = new bill("22.03.2020", "RE-0001", "Max Mustermann", "123 / 456 / 78912")
        describe('#Getter', () => {
            it('should return the date of issue', () => {
                assert.equal(testbill.date_of_issue, "22.03.2020"); 
            });
            it('should return the number of the bill', () => {
                assert.equal(testbill.billnumber, "RE-0001"); 
            });
            it('should return the name of the costumer', () => {
                assert.equal(testbill.costumername, "Max Mustermann"); 
            });
            it('should return the tax number', () => {
                assert.equal(testbill.faxnumber, "123 / 456 / 78912"); 
            }); 
        });
        describe('#setcostumername', () => {
            it('should change the name of the costumer', () => {
                testbill.costumername= "Franz Fustermann";
                assert.equal(testbill.costumername, "Franz Fustermann");
            });
        });
        describe('#testEmptyValue', () => {
            it('should not change the adress if empty string is passed',() => {
                testbill.taxnumber= "";
                assert.notEqual(testbill.taxnumber, ""); //if test passed adress is not empty
            });
        });
    });
}

export default testbill;