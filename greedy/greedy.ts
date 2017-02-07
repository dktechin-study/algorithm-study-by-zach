/**
 * Created by doublejnu on 2017. 2. 4..
 */
import 'colors'
import {tests, testTypes, testAppTypes} from './testCases'

let output: number[] = [];

interface makeTablesType { (apps:testAppTypes[], total:number, used?:number): any }

const greedy: (test:testTypes) => number = (test) => {
    const total: number = test.total - test.wired;
    const apps: testAppTypes[] = test.apps;
    const totalAppSize: number =  apps.map(each => each.size).reduce( (a, b) => a + b);

    if(total - totalAppSize < 0){
        return -1;
    }

    let table: number[] = [];

    const makeTable: makeTablesType = (apps, total) => {
        let tmp: number[] = apps.map( each => total/(each.size/each.execT) );
        let minValue = Math.min.apply(null, tmp);
        let app: any = tmp.map( (each, i ) => {
            return (minValue == each) ? apps[i] : false;
        }).filter(each => each)[0];

        if(total - app.size >= 0){
            table.push(app.execT);
            makeTable(apps, total - app.size);
        }
    };

    makeTable(apps, total);
    return table.reduce( (a,b) => a+b );
};


tests.forEach( (test:testTypes) => {
    output.push(greedy(test));
});

export { output }