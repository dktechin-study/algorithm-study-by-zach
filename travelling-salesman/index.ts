import { expect } from 'chai';
import { INPUT, Input } from './input';
import { stringifyInput } from './util';

const SolveProblem: (INPUT: Input) => number = (INPUT) => {
    let result: number = 0;

    return result;
};


const Test: () => void = () => {
    describe('Salesman Problem Result', function(){
        INPUT.forEach((test, idx) => {
            it(`With Input \n${stringifyInput(test.input)}\n should print ${test.output}`, function(){
                expect(SolveProblem(test)).to.equals(test.output);
            });
        });
    });
};

Test();