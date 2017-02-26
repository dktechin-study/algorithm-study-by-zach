import { INPUTS, TestInterface, InputInterface, QueryInterface } from './input';
import { expect } from 'chai';

const getMinimum: (limits: number[], q: QueryInterface)=>number = (limits, q) => {
  let minimum: number = limits[q.i];
  // solve below this line
  for ( let i = q.i ; i < q.j ; i++ ) {
    let each = limits[i];
    minimum = minimum < each ? minimum : each;
  }

  return minimum;
};

const test: (inputs: InputInterface[]) => void = (INPUTS) => {
  INPUTS.forEach((test: InputInterface)=>{
    const queries = test.q;
    const limits = test.limits;
    const results = test.result;
    queries.forEach((q, i) => {
      describe(`Result for each query ${q.i}, ${q. j},`, function(){
        it(`should return ${results[i]}`, function(){
          expect(getMinimum(limits, q)).to.equals(results[i]);
        });
      });
    });
  });
};

test(INPUTS);