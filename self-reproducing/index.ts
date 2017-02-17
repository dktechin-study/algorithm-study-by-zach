/**
 * Created by doublejnu on 2017. 2. 5..
 */
import DNA from './dna';
import { expect } from 'chai'
import { input } from './input'

describe('Self-reproducing DNA', function(){
    let dna = new DNA(input.length, input[0]);
    describe('DNA input', function(){
        it('should print', function(){
            console.log(input);
        });
    });
    describe('#reproduce()', function(){
        it('should return [0,1,0,1,0]', function(){
            expect(dna.reproduce([0,0,1,0,0]).join(' ')).to.equal([0,1,0,1,0].join(' '));
        });
    });
    describe('#traceBack()', function(){
        it('should return [1,0,2,0,1]', function(){
            expect(dna.traceBack([1,3,0,3,0]).join(' ')).to.equal([1,0,2,0,1].join(' '));
        });
    });
});

