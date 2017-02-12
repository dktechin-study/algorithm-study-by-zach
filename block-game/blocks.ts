class Blocks {
  readonly N: number;
  private len: number;
  public blocks: number[][];
  constructor(N: number){
    this.N = N;
    this.len = N * (N + 1)/2;  
  }

  getBlocks(): number[][]{
    const blocks:number[][] = [];
    const N = this.N;
    const len = this.len;
    
    for(let i = 1, j = 1 ; blocks.length < len ;){
      if(j > N){ i++; j = i; }
      const block: number[] = [i, j];
      j++;
      blocks.push(block);
    }
    return blocks;
  }
}

export default Blocks;