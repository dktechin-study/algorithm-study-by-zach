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

    describe('#traceBack', function(){
        it('should print', function(){
            expect(dna.traceBack()).to.equal([0,0,1,0,0]);
        });
    });
});
