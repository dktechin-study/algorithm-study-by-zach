/**
 * Created by doublejnu on 2017. 2. 4..
 */
import 'colors'
import { App, AppTypes } from './app'
import { Memory } from './memory'

export class SmartPhone {
    public memory: Memory;
    public apps: AppTypes[] = [];
    public appsRunning: AppTypes[] = [];

    constructor(){
        this.memory = new Memory(110, 10);
    }

    public install(app: AppTypes){
        this.apps.push(app);
    }

    public run(app: AppTypes){
        this.memory.use(app.memory, (err: any) => {
            if(typeof err == 'undefined'){
                this.appsRunning.push(app);
            }
        });
    }

    public kill(app: AppTypes){

    }
}