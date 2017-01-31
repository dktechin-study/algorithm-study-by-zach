/**
 * Created by zach on 2017. 1. 24..
 */
console.log('------------ gcd ----------');

function getGcd(x, y){
    if(y === 0) return x;
    return getGcd(y, x%y);
}


console.log(getGcd(60, 80));

export default () => {}