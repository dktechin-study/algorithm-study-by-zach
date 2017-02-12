import { expect } from 'chai';
import { INPUT, OUTPUT, printBoard } from './io';
import { Board } from './board'

let board = new Board(5);
board.board = INPUT.BOARD;

describe('Blocks.getBlocks()', function(){
  it('should return a 2D array the length of which is 15', function(){
    expect(board.blocks.length).to.equal(15);
  });
});

describe('Board.placeBlocks()', function(){
  let blocksOnBoard = board.placeBlocks();
  let output = printBoard(OUTPUT);
  it(`should print \n${output}`, function(){
    expect(printBoard(blocksOnBoard)).to.equal(output);
  });
});