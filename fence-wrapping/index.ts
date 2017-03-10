import { INPUTS, OUTPUTS, INPUT_INTERFACE } from './input';
import { expect } from 'chai';

const getDiff: (before: number, after: number) => number = (before, after) => {
    return after-before;
};
const _getSlope: (dx: number, dy: number) => number = (dx, dy) => {
    return dy/dx;
};
const getSlopeByPole: (poleA: INPUT_INTERFACE, poleB: INPUT_INTERFACE ) => number = (poleA, poleB) => {
    let beforeX = poleA.x;
    let beforeY = poleA.h;
    let afterX = poleB.x;
    let afterY = poleB.h;
    let dx = getDiff(beforeX, afterX);
    let dy = getDiff(beforeY, afterY);
    return _getSlope(dx, dy);
};

const fenceWrapper: (input: INPUT_INTERFACE[]) => string = (test) => {
    let result: number[] = [];
    const len = test.length;

    for (let i = 0 ; i < len ;) {
        result.push(i + 1);

        let thisPole = test[i];
        let maxPoleSlope;
        let maxPoleIdx;

        for ( let j = i + 1 ; j < len; j++ ) {
            let nextPole = test[j];
            let slope = getSlopeByPole(thisPole, nextPole);
            if (!maxPoleSlope || maxPoleSlope < slope ) {
                maxPoleSlope = slope;
                maxPoleIdx = j;
            }
        }
        i = maxPoleIdx;
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