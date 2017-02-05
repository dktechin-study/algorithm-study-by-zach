/**
 * Created by doublejnu on 2017. 2. 4..
 */
export interface AppTypes {name: string; memory: number; execT: number}
export class App {
    public name: string;
    public memory: number;
    public execT: number;
    constructor(name:string, memory:number, execT: number){
        this.name = name;
        this.memory = memory;
        this.execT = execT;
    }
}