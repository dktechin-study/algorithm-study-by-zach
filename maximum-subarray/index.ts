/**
 * Created by zach on 2017. 2. 22..
 */
import { expect } from 'chai'
import { TEST, Test, eachTest } from './input';

const testCases: eachTest[] = TEST.cases;

const sum: (a:number, b:number) => number = (a, b) => a + b;

const MCS: (test: eachTest) => number = (test) => {
    const testCases = test.content;
    const size = test.size;
    let sum: number = 0;
    let largest: number = 0;

    for(let i  = 0 ; i < size ; i++){
        sum = sum + testCases[i];
        largest = largest < sum ? sum : largest;
        console.log(largest);
    }

    return largest;
};

const testEach = (testCases: eachTest[]) => {
    testCases.forEach( (test, i) => {
        if(i > 0)  return;
        describe(`TEST CASE ${i + 1}: [${test.content.join(',')}]`, function(){
            it(`should be equal to ${test.answer}`, function(){
                expect(MCS(test)).to.equal(test.answer);
            });
        });
    });
};

testEach(testCases);
