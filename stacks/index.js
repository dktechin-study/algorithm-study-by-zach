import Stack from './Stack'


// 1. 스택으로 Factorial 구현하기

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

// console.log(factorial(3));

// 2. arithmetic expression checker
let expression = '2.3 + 23 / 12 + (3.14159 * .24';
const parcheck = (exp) => {
	let pos;
	let s = new Stack();
	let point = 0;
	while(point < exp.length){
		if ( exp[point] === '(' ) {
			s.push(exp[point]);
			pos = point;
		} else if (exp[point] === ')' && !s.isEmpty()) {
			s.pop();
			pos = undefined;
		}
		point++
	}

	if(!s.isEmpty()){
		return `illegal expression detected on expression "${exp.slice(0, point-1) + "<" + exp.slice(point-1)}
		" at point ${pos}`;
	}
	return 'valid expression';
};

console.log(parcheck(expression));




export default () => {

}

