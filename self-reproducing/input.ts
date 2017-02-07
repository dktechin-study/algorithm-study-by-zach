/**
 * Created by doublejnu on 2017. 2. 5..
 */
import { readFileSync } from 'fs'

let inputStr = readFileSync(`${__dirname}/input.txt`).toString();
let inputToArr = inputStr.split('\n');
let testCases = inputToArr[0];
let input: any[] = [];
for(let i = 1 ; i < inputToArr.length ; i += 2){
    input.push(inputToArr[i + 1].split(' ').map(each=>Number(each)));
}
export { input };
