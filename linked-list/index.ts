import LinkedList from './linkedlist'
import { expect } from 'chai'

const inputs: number[] = [4, 9, 123, 1, 2, 0, 123, 3123];

describe('Linked List', function(){
	let list = new LinkedList<number>();

	it('should insert data in the following order: ' + inputs.join(', '), function(){
		inputs.forEach((each)=>{
			list.push(each);
		});
		let result: any[] = list.map((node: any, idx: number)=>{
			return node.data;
		})
		expect(inputs.join(',')).to.equal(result.join(','));
	});

});