import Stack from './Stack'

const factorial = (n) => {
	let s = new Stack();
	let tmp = 1;
	while(n > 1){
		s.push(n--);
	}
	while(s.length > 0){
		tmp = tmp * s.pop();
	}

	return tmp;
};

console.log(factorial(3));