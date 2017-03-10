/**
 * Created by zach on 2017. 3. 10..
 */
export const stringifyInput: (input: number[][]) => void = (input) => {
    return input.map((each) => each.join(' ')).join('\n');
};