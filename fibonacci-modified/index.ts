import { expect } from 'chai';


const fibonacci: (t1: number, t2: number, n: number) => number = (t1, t2, n) => {
    if(n < 3) return t2;
    let t3 = t1 + t2*t2;
    return fibonacci(t2, t3, n-1);
};


describe('fibonacci', function(){
    it('should return 5', function(){
       expect(fibonacci(0, 1, 10)).to.equal(5);
    });
});