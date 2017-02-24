/**
 * Created by zach on 2017. 2. 22..
 */
export interface eachTest { size: number, content: number[], answer:number}
export interface Test { n: number; cases: eachTest[]}
export const TEST: Test = {
    n: 2,
    cases: [
        {size: 5, content: [-1, 5, 2, -2, 8], answer: 13},
        {
            size: 50,
            content: [-13920, 2341, -14904, 12152, 8208, -8190, -9494, 10792, -5120, 2421, -3316, -4203, 4224, -7460, 8801, -459, 8447, -14983, -7562, 6515, 786, 12579, -7659, -5633, -8847, 3899, 3178, -1944, -1982, 8674, 2916, -18964, -3429, -3223, -13986, 1935, -3774, -9719, -18945, 1898, 10935, -7211, -11682, -4026, -2956, -16660, -14230, -6295, -19085, -3597],
            answer: 20360
        }
    ]
};