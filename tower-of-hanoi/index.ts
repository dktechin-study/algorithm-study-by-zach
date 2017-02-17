import { expect } from 'chai';


interface Hanoi {(towers: number[][], b?: number, c?: number): void}
const N = 3;
const MAX_COUNT = Math.pow(2, N);
const makePlates = (n: number): number[] => {
    if(n == 1) return [n];
    return makePlates(n-1).concat([n]);
};

const towers = [makePlates(N), [], []];
const moveLog = {
    cnt: 0,
    update: (val: number, from: number, to: number): void => {
        this.cnt++;
        console.log(`moving plate ${val} from ${from} to ${to}`);
    }
};


const canMoveToNext = (current: number, next: number): boolean => current < next || typeof next == 'undefined';
const canMoveToPrev = (current: number, prev: number): boolean => current > prev || typeof prev == 'undefined';
const hasContent = (column: number[]): boolean => column.length > 0;
const getPlate = (tower: number[]) => {
    return tower[tower.length - 1];
};

const hanoi: Hanoi = (towers, currentIdx = 0, nextIdx = 1) => {
    if(!!towers[nextIdx]){
        return;
    }
    let tower = towers[currentIdx];
    let plate = getPlate(tower);
    if(hasContent(tower)){
        if( canMoveToNext( plate, getPlate( towers[nextIdx] ) ) ){

        }
    }
};