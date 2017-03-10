/**
 * Created by zach on 2017. 3. 9..
 */
export interface Input { input: number[][] ; output: number }
export const INPUT: Input[] = [
    {
        input: [
            [0, 14, 4, 10, 20],
            [14, 0, 7, 8, 7],
            [4, 5, 0, 7, 16],
            [11, 7, 9, 0, 2],
            [18, 7, 17, 4, 0]
        ],
        output: 30
    },
    {
        input: [
            [9, 9, 2, 9, 5],
            [6, 3, 5, 1, 5],
            [1, 8, 3, 3, 3],
            [6, 0, 9, 6, 8],
            [6, 6, 9, 4, 8]
        ],
        output: 18
    }
];
