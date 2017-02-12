const N = 5;
const BOARD = [
  [3, 2, 5, 1, 3, 2],
  [4, 1, 4, 2, 3, 2],
  [3, 3, 1, 1, 2, 4],
  [5, 5, 1, 3, 5, 4],
  [4, 5, 2, 4, 1, 5]
];

export const INPUT = { N, BOARD };
export const OUTPUT: number[][] = [
  [1, 2, 2, 4, 4, 6],
  [1, 3, 3, 5, 5, 6],
  [7, 7, 10, 11, 11, 13],
  [8, 9, 10, 12, 12, 13],
  [8, 9, 14, 14, 15, 15]
];

export const printBoard: (board:number[][]) => string = (board) => {
  let result = '';
  for(let i = 0 ; i < board.length ; i++){
    result += board[i].join(' ') + '\n';
  }
  return result;
};