export interface BlockItem {
    a: number;
    b: number;
    i?: number;
    j?: number;
    order?: number;
}

class Block implements BlockItem{
    a:number;
    b:number;
    i:number;
    j:number;
    order:number;
    constructor(a: number, b: number, i: number = -1, j: number = -1, order: number = -1){
        this.a = a;
        this.b = b;
        this.i = i;
        this.j = j;
        this.order = order;
    }
}

export class Blocks {
    readonly N: number;
    private len: number;
    public blocks: number[][];

    constructor(N: number) {
        this.N = N;
        this.len = N * (N + 1) / 2;
    }

    getBlocks(): BlockItem[] {
        const blocks: BlockItem[] = [];
        const N = this.N;
        const len = this.len;

        for (let i = 1, j = 1; blocks.length < len;) {
            if (j > N) {
                i++;
                j = i;
            }
            j++;
            blocks.push(new Block(i, j));
        }
        return blocks;
    }
}
