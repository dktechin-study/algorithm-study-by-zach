/**
 * Created by zach on 2017. 2. 21..
 */
const testCases = 2;
const case1 = [1, 1, 1, 1, 6];
const case2 = [1, 3];

const getLargestIdx: (arr: number[]) => number = (arr) => arr.indexOf(Math.max.apply(null, arr));

const makeEven: (test: number[]) => number = (test) => {
    let totalCoins = test.reduce( (a, b) => a + b );
    if(totalCoins%2 != 0) return -1;
    let avg = totalCoins/test.length;
    let largestIdx = getLargestIdx(test);
    let i = 0;
    let cnt = 0;
    while(test[largestIdx] != avg){
        test[i]++;
        test[largestIdx]--;
        largestIdx = getLargestIdx(test);
        i++;
        cnt++;
    }

    return cnt;
};



console.log(makeEven(case1));
console.log(makeEven(case2));
console.log(makeEven([1, 3, 2, 5, 4]));