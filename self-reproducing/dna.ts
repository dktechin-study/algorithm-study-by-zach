/**
 * Created by doublejnu on 2017. 2. 5..
 */
class DNA {
    public dnas: number[];
    public size: number;
    private queue: number[] = [];
    constructor(size: number, dnas: number[]){
        this.dnas = dnas;
        this.size = size;
    }

    reproduce(pattern: number[]){
        let stack: boolean[] = [];
        pattern.forEach(each => {
           stack.push((each > 0));
        });

        stack.forEach( (bool, idx) => {
            if(bool){
                pattern[idx - 1] = pattern[idx + 1] += pattern[idx];
                pattern[idx] = 0;
            }
        });
        return pattern;
    }

    traceBack(input: number[]){
        let q: number[] = [];
        for(let i = 0 ; i < input.length ; i++) {
            let current:number = input[i];
            let prev:number = q.shift();
            let next:number = current - prev;
            input[i] = i == 0 ? input[i] : 0;
            q.push();
        }

        return input;
    }
}
export default DNA;