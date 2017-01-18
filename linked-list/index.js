/**
 * Created by zach on 2017. 1. 18..
 */
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor(...args){
        this.head = null;
        this.tail = null;

        this.init(args);
    }

    init(args){
        if(args.length > 0 && isNaN(args[0])){
            for(let i = 0 ; i < args.length ; i++){
                this.push(args[i]);
            }
        }
    }

    push(data){
        let node = new Node(data);
        let head = this.head;
        let tail = this.tail;

        if(!head){this.head = this.tail = node;return false;}
        this.tail = tail.next = node;
    }

    get(arg){
        switch(typeof arg){
            case 'number': return this._getByIdx(arg);
        }
    }

    _getByIdx(idx){
        let node = this.head;
        let i = 0;
        while(i < idx){
            if(!node){throw new Error(`Reference Error: Node[${idx}] is not defined`)}
            node = node.next;
            i++;
        }
        return node;
    }

    _getByProps(obj){
        let node = this.head;
        while(!node.next){
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    if(node[key] === obj[key]) return node;
                }
            }
            node = node.next;
        }
    }

    pop(){
        let node = this.head;
        let next = node.next;
        while(node.next.next){
            node = next;
            next = node.next;
        }
        node.next = null;
    }

    shift(){
        let head = this.head;
        this.head = head.next;
        head.next = null;
        return head;
    }

    unshift(data){
        let prevHead = this.head;
        this.head = new Node(data);
        this.head.next = prevHead;
        return this.head;
    }

    insert(data, idx){
        let nodeBefore = this._getByIdx(idx-1);
        let nodePushedUp = nodeBefore.next;
        let newNode = new Node(data);
        nodeBefore.next = newNode;
        newNode.next = nodePushedUp;

        return newNode;
    }

    pluck(){

    }
}

let arr = new LinkedList('hello', 'world', 'hi');
