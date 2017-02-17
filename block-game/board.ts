import {Blocks, BlockItem} from './blocks'

export class Board {
    private N: number;
    public blocks: BlockItem[];
    private _board: number[][];

    constructor(N: number) {
        this.N = N;
        this.blocks = new Blocks(N).getBlocks();
    }

    get board() {
        return this._board
    }

    set board(board: number[][]) {
        this._board = board
    }

    makeEmptyBoard(board: number[][]) {
        return board.map((row) => {
            return row.map(elem => -1);
        });
    }

    getBlockByValue(a: number, b: number, blocks: BlockItem[]): BlockItem {
        let block = blocks.filter((each) => (each.a == a && each.b == b));
        return block.length > 0 ? block[0] : null;
    }

    getBlockByPos(i: number, j: number, blocks: BlockItem[]): BlockItem{
        let block = blocks.filter((each) => (each.i == i && each.j == j));
        return block.length > 0 ? block[0] : null;
    }

    private placeBlock(board: number[][], blocks: BlockItem[], i: number, j: number = 0 ): BlockItem[] {
        let row = board[i];
        let pivot = board[i][j];
        let hasNext = j == row.length - 1;
        let hasBelow = i == board.length - 1;
        let block: BlockItem;

        // 1. get a value pair on the board
        // 2. get blocks with matching pairs
        // 3. on returning one block, go ahead
        // 4. else, evaluate returned blocks in accordance with greedy choice
        // 5.


        return []
    }

    placeBlocks(): number[][] {
        let board = this.board;
        let blocks = this.blocks;
        let used: BlockItem[] = [];
        let len = blocks.length;

        let result: number[][] = this.makeEmptyBoard(board);

        while (used.length < len) {
            for (let i = 0; i < board.length; i++) {
                let usedBlocks = this.placeBlock(board, blocks, i);

                console.log(usedBlocks);

                if(usedBlocks.length == board[i].length){
                    used = used.concat(usedBlocks);
                }
            }
            break;
        }

        return result;
    }
}
/*
 조건
 1. 모든 블럭이 소진 될 때 까지
 2. 왼쪽 위에서 아래로 2차원 배열 iteration
 3. 각 row가 끝날때 블록을 다 놓지 못하면 backtrack

 */