export interface QueryInterface {i: number, j: number}
export interface TestInterface {limits:number[], q: QueryInterface[]}
export interface InputInterface extends TestInterface {n: number, queries: number, result: number[]}

export const INPUTS: InputInterface[] = [
  {
    n: 10,
    queries: 4,
    limits: [75, 30, 100, 38, 50, 51, 52, 20, 81, 5],
    q: [{i: 1, j: 10}, {i: 3, j: 5}, {i: 6, j: 9}, {i: 8, j: 10}],
    result: [5, 38, 20, 5]
  },
  {
    n: 5,
    queries: 2,
    limits: [67, 74, 10, 8, 81],
    q: [{i: 1, j: 5}, {i: 1, j: 3}],
    result: [8, 10]
  }
];