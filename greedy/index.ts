/**
 * Created by doublejnu on 2017. 1. 28..
 */
import { expect } from 'chai'
import { output } from './greedy'


describe('Greedy Algorithm', function(){
    describe('output', function(){
        it('should be equals to answer', function(){
           let answer = [60, 100, -1];
            expect(output.join(',')).to.equal(answer.join(','));
        });
    });
});