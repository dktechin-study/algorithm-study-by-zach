import { readFile, writeFile } from 'fs';

export default ()=>{
    readFile(`${__dirname}/files/input.txt`, 'utf8', (err, input) => {
        let testCases = input.split('\n');
        console.log(testCases)
    });
}