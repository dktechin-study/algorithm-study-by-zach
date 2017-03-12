import {expect} from 'chai';
import {INPUT, Input} from './input';
import {stringifyInput} from './util';
/*
 * Q. 모든 도시를 각각 한번만 거쳐 가장 최소한의 값이 나오도록 하는 루트 찾아서 최소한의 값 출력
 *
 *  Conditions
 * 1.
 * */
const SolveProblem: (INPUT: Input) => number = (INPUT) => {
  let result: number = 0;
  const citiesVisited = {};

  // methods
  interface Visit { (input: Input, mvnt?: number, from?: number, to?: number): number }
  const visitCities: Visit = (input, mvnt = 0, from = 0, to = 0) => {

    return 0;
  };

  return result;
};

const Test: () => void = () => {
  describe('Salesman Problem Result', function () {
    INPUT.forEach((test, idx) => {
      it(`With Input \n${stringifyInput(test.input)}\n should print ${test.output}`, function () {
        expect(SolveProblem(test)).to.equals(test.output);
      });
    });
  });
};

Test();