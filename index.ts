/// <reference path="node_modules/@types/chai/index.d.ts"/>
/// <reference path="node_modules/@types/mocha/index.d.ts"/>
import { expect } from 'chai';

import BST from './binary-trees';
import GREEDY from './greedy';

describe('Binary Search Tree', function(){
    let bst: any = new BST();
    let inputs: number[] = [23, 45, 16, 37, 3, 99, 22];
    inputs.forEach((number)=> bst.insert(number));

    describe('#find()', function(){
        let val = inputs[3];
        it(`should return node with value ${val}`, function(){
            expect(bst.find(val).data).to.equal(val);
        });
    });

    describe('#remove()', function(){
        let num: number = inputs[1];
        it(`should remove node with value ${num}`, function(){
            bst.remove(num);
            expect(bst.find(num)).to.equal(null);
        });

        it(`should equate the length of inputs and tree elements + 1`, function(){
            let inputSorted = inputs.sort((a, b) => a-b);
            let arr: number[] = [];
            bst.inorder(bst.root, (node:any)=>{
                arr.push(node.data);
            });

            inputSorted.forEach( (no, i) => {
                console.log('input: ', no);
                console.log('node: ', arr[i] ,'\n---------');
            });

            expect(inputSorted.length).to.equal(arr.length + 1);
        });
    });
});

describe.skip('Greedy Algorithm', function(){
});