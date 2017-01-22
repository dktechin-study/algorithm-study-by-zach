export default class Stack {
	constructor(){
		this.dataStore = [];
		this.top = 0;
	}

	get length(){return this.top}
	set length(len){this.top = len}

	push(element){
		this.dataStore[this.top++] = element;
	}

	pop(){
		return this.dataStore[--this.top];
	}

	peek(){
		return this.dataStore[this.top - 1];
	}

	clear(){
		this.length = 0;
	}

	isEmpty(){
		return this.length === 0;
	}
}