/**
 * Created by zach on 2017. 2. 22..
 */
import { expect } from 'chai'
import { TEST, Test, eachTest } from './input';

const testCases: eachTest[] = TEST.cases;

const sum: (a:number, b:number) => number = (a, b) => a + b;

const MCS: (test: eachTest) => number = (test) => {
    const arr = test.content;
    const size = test.size;
    let sum: number = 0;
    let result: number = 0;

    /*
    vars arr, MAX, sum,
    1. if(MAX + a[i] > MAX) MAX += a[i]
    2. 
    */

    for (let i = 0 ; i < size ; i++){
        sum += arr[i];
        if(sum < 0){
            sum = 0;
        }else if(result < sum){
            result = sum;
        }
    }
    return result;
};

const testEach = (testCases: eachTest[]) => {
    testCases.forEach( (test, i) => {
        // if(i > 0)  return;
        describe(`TEST CASE ${i + 1}: [${test.content.join(',')}]`, function(){
            it(`should be equal to ${test.answer}`, function(){
                expect(MCS(test)).to.equal(test.answer);
            });
        });
    });
};

testEach(testCases);
