import Blocks from './blocks'

export class Board {
  private N: number;
  public blocks: number[][];
  private _board: number[][];
  constructor(N: number){
    this.N = N;
    this.blocks = new Blocks(N).getBlocks();
  }
  get board(){ return this._board }
  set board(board: number[][]){ this._board = board }

  makeEmptyBoard(board:number[][]){
    return board.map((row)=>{
      return row.map(elem => -1);
    });
  };

  getBlock(a: number, b: number, blocks:number[][]): number[]{
    return blocks.filter((each)=>{
      return each.indexOf(a) != -1 && each.indexOf(b) != -1;
    })[0];
  }

  placeBlocks(): number[][]{
    let board = this.board;
    let blocks = this.blocks;
    let used: number[][] = [];
    let len = blocks.length;

    let result: number[][] = this.makeEmptyBoard(board);

    while(used.length < len){
      for(let i = 0; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
          if(result[i][j] == -1){
            let pivot = board[i][j];
            let right = board[i][j + 1];
            let bottom = board[i + 1][j];

          }
        }
      }
      used.push([1, 1]);
    }
    result = used;
    return result;
  }
}
/*
조건 
1. 모든 블럭이 소진 될 때 까지
2. 왼쪽 위에서 아래로 2차원 배열 iteration
3. 각 row가 끝날때 블록을 다 놓지 못하면 backtrack 

*/