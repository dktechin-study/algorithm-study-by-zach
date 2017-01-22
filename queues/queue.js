export default class Queue {
	constructor(){
		this.dataStore = [];
	}

	get store(){return this.dataStore}
	get length(){return this.dataStore.length}
	get front(){return this.dataStore[0]}
	get back(){return this.dataStore[this.length - 1]}

	enqueue(element){
		this.dataStore.push(element);
	}

	dequeue(){
		return this.dataStore.shift();
	}

	isEmpty(){return this.length === 0}

	toString(){
		let result = '';
		for (let i = 0 ; i < this.length ; i++){
			result += this.store[i] + '\n';
		}

		return result;
	}
}

let q = new Queue();

q.enqueue('Hey');
q.enqueue('I just met you');
q.enqueue('and this is crazy');
q.enqueue('but here\'s my number ');
q.enqueue('so call me maybe');