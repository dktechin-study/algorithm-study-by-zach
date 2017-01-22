import { generateRandomArray } from './utils'

const qSort = (list=[]) => {
	if(list.length === 0) return [];
	let left = [];
	let right = [];
	let pivot = list[0];

	for (let i = 1 ; i < list.length ; i++) {
		if (list[i] < pivot) {
			console.log(list[i] + "pushed to left");
			left.push(list[i]);
		} else {
			console.log(list[i] + "pushed to right");
			right.push(list[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}

let arr = generateRandomArray();
console.log(arr);
let sorted = qSort(arr);
console.log(sorted);