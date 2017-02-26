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
  const moveInputElem: ( from:number, to: number ) => void = (from, to) => {
    let tmp = input.splice(from, 1);
    input.splice(to, 0, tmp[0]);
  };

  for(let i = 0 ; i < size ; i++){
    moveInputElem(i, 0);
    if(i != size - i - 1){
      moveInputElem(size - i - 1, size - 1);
    }
    output.push(input.join(' '));
  }

  return output.join('\n');
};

const Main: (inputs: any) => void = (inputs) => {
  // inputs.forEach((test: any, i:number) => {
    let test = inputs[1];
    describe(`Result of test no ${1}`, function(){
      it(`should print\n${test.result}`, function(){
        expect(toSymmetry(test.matrix)).to.equals(test.result);
      });
    });
  // })
};

Main(INPUTS);