/**
 * Created by zach on 2017. 2. 17..
 */
import { expect } from 'chai';
import { getAllFractions } from './if'
describe('getAllFractions()', function(){
    let N = 5;
    console.log(getAllFractions(5));
    it('should return ', function(){
        expect(getAllFractions(5).length).to.equal(11);
    });
});