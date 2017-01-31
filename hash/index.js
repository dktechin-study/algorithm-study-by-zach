/**
 * Created by zach on 2017. 1. 24..
 */
import Hash from './hash'
let names = ['zach.jung', '정진우', 'apple', 'automobile', '1231234123123123', 'Jonathan'];
console.log('hey');
let hash = new Hash();


names.forEach(name => hash.put(name, name));
hash.showDistro();

console.log(hash.get('정진우'));


export default () => {}
