import { INPUTS, OUTPUTS, INPUT_INTERFACE } from './input';
import { expect } from 'chai';


const getSlope: (changeX: number, changeY: number) => number = (cx, cy) => {
    return cy/cx;
};
const fenceWrapper: (input: INPUT_INTERFACE[]) => string = (test) => {
    let result: number[] = [];
    const len = test.length;

    for (let i = 0 ; i < len ; i++) {
        let thisPole = test[i];
        let maxPole;
        for(let j = i + 1 ; j < len; j++){
            let nextPole = test[j];
            if(!maxPole){
                maxPole = j;
                continue;
            }

            let slope = getSlope(nextPole.x - thisPole.x, nextPole.h - thisPole.h);
            maxPole = maxPole > slope ? maxPole :
        }
    }


    return result.join(' ');
};


const TEST: (inputs: INPUT_INTERFACE[][]) => void = (inputs) => {
    inputs.forEach((test, idx) => {
       describe(`TEST CASE ${idx}`, function(){
           it(`should return ${OUTPUTS[idx].join(" ")}`, function(){
               expect(fenceWrapper(test)).to.equals(OUTPUTS[idx].join(" "));
           });
       });
    });
};


TEST(INPUTS);