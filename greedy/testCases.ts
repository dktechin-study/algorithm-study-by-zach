/**
 * Created by doublejnu on 2017. 2. 4..
 */
import {readFileSync} from 'fs'

export interface testAppTypes { execT: number; size: number; }
export interface testTypes {
    total: number;
    wired: number;
    apps: testAppTypes[];
}

const input = readFileSync(`${__dirname}/io/input.txt`)
    .toString()
    .split('\n');


let testCases = Number(input[0]);
let tests = [];
for(let i = 1; i < input.length ;){
    let tmp = {};
    let memory = input[i].split(' ');
    let appNo = Number(input[i+1]);
    let appIdx = i + 2;

    let apps = input.slice(appIdx, appIdx + appNo).map( (each) => {
        let app = each.split(' ');
        return {
            execT: Number(app[0]),
            size: Number(app[1])
        }
    });

    tmp = {
        total: Number(memory[1]),
        wired: Number(memory[0]),
        apps
    };

    tests.push(tmp);
    i += (2 + appNo);
}


export { tests };