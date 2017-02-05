/**
 * Created by doublejnu on 2017. 2. 4..
 */
import 'colors'

export class Memory{
    readonly _total: number;
    readonly _wired: number;
    private _used: number;
    private _free: number;

    constructor(size: number, wire: number){
        this._total = size;
        this._wired = Math.min(wire, size);
        this._used = 0;
        this._free = size - this._wired;
    }
    get total(): number{ return this._total }
    get wired(): number{ return this._wired }
    get used(): number{ return this._used }
    get free(): number{ return this._free }

    public use(memory: number, cb: Function){
        if(this._free < memory){
            return cb(new Error('Not Enough Memory!'));
        }
        this._used += memory;
        this._free -= memory;
        return cb();
    }

    public unUse(memory: number){
        this._used -= memory;
        this._free += memory;
        return this;
    }

    public stats(): void{
        console.log('[ memory stats ]'.yellow);
        console.log('total: ', this._total);
        console.log('wired: ', this._wired);
        console.log('available: ', this._free);
    }
}