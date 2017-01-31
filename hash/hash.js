/**
 * Created by zach on 2017. 1. 24..
 */
export default class Hash {
    constructor(){
        this.table = new Array(137);
    }

    simpleHash(data){
        let total = 0;
        for(let i = 0 ; i < data.length; i++){
            total += data.charCodeAt(i);
        }

        return total % this.table.length;
    }

    betterHash(str){
        const H = 37;
        let total = 0;
        for ( let i = 0 ; i < str.length ; i++ ) {
            total += H * total + str.charCodeAt(i);
        }

        total = total % this.table.length;
        if ( total < 0 ) {
            total += this.table.length - 1;
        }

        return parseInt(total);
    }

    showDistro(){
        let n = 0;
        for ( let i = 0 ; i < this.table.length ; i++) {
            if(this.table[i]){
                console.log(`${i} : ${this.table[i]}`);
            }
        }
    }

    put(key, data){
        let pos = this.betterHash(key);
        this.table[pos] = data;
    }

    get(key){
        let pos = this.betterHash(key);
        return this.table[pos];
    }
}