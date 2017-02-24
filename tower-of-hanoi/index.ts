import { expect } from 'chai';


interface Hanoi {(n: number, a?: number, b?: number, via?: number): void
}
const N = 3;
const MAX_COUNT = Math.pow(2, N) - 1;
const makePlates = (n: number): number[] => {
    if (n == 1) return [n];
    return makePlates(n - 1).concat([n]);
};

const towers = [makePlates(N), [], []];
const moveLog = {
    cnt: 0,
    update: (val: number, from: number, to: number): void => {
        console.log(`moving plate ${val} from ${from} to ${to}`);
        console.log('Movement Count: ', ++moveLog.cnt);
    }
};

const hanoi: Hanoi = (n, from, to, via) => {
    if(n == 0) return;
    hanoi(n-1, from, via, to);
    moveLog.update(n, from, to);
    hanoi(n-1, via, to, from);
};

hanoi(N, 1, 3, 2);