/// <reference path="node_modules/@types/chai/index.d.ts"/>
/// <reference path="node_modules/@types/mocha/index.d.ts"/>
import { expect } from 'chai'

import BST from './binary-trees';
import GREEDY from './greedy';

describe('Binary Search Tree', function(){
    let bst: any = new BST();
    let inputs: number[] = [12, 43, 21, 1, 8, 7, 9, 10];
    inputs.forEach((number)=> bst.insert(number));

    describe('#find()', function(){
        let val = inputs[3];
        it(`should return node with value ${val}`, function(){
            expect(bst.find(val).data).to.equal(val);
        });
    });

    describe('#remove()', function(){
        let num: number = inputs[3];
        it(`should remove node with value ${num}`, function(){
            bst.remove(num);
            expect(bst.find(num)).to.equal(null);
        });
    });
});

describe.skip('Greedy Algorithm', function(){
});