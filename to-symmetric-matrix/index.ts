import { expect } from 'chai';

const INPUTS = [
  {
    matrix: ["A", "B", "C", "D"],
    result: "A B C D\nB A D C\nC D A B\nD C B A"
  },
  {
    matrix: ["A", "B", "C", "D", "E", "F", "G", "H"],
    result: "A C B D E F G H\nC A D B F E H G\nB D A C G H E F\nD B C A H G F E\nE F G H A C B D\nF E H G C A D B\nG H E F B D A C\nH G F E D B C A"
  }
];

const toSymmetry: (matrix: any[]) => string = (input) => {
  let output: any[] = [];
  const size = input.length;

  const swap: (arr: any[], nth: number) => string = (arr, nth) => {
    let input = arr.slice(0);
    for(let i = 0; i < size ; i+=2){
      let tmp = input[i];
      input[i] = input[i+1];
      input[i + 1] = tmp;
    }
    return input.join(' ');
  };


  for(let i = 0 ; i < size ; i+=2){
    output.push(swap(input, i));
  }

  return output.join('\n');
};

const Main: (inputs: any) => void = (inputs) => {
  // inputs.forEach((test: any, i:number) => {
    let test = inputs[0];
    describe(`Result of test no ${1}`, function(){
      it(`should print\n${test.result}`, function(){
        expect(toSymmetry(test.matrix)).to.equals(test.result);
      });
    });
  // })
};

Main(INPUTS);