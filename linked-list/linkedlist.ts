import Node from './node'

class LinkedList <T>{
    public head: Node<T>;
    public tail: Node<T>;
    constructor(...args:T[]){
        this.head = null;
        this.tail = null;

        this.init(args);
    }

    init(args: T[]){
        for(let i = 0 ; i < args.length ; i++){
            this.push(args[i]);
        }
    }

    push(data: T){
        let node = new Node<T>(data);
        let head = this.head;
        let tail = this.tail;

        if(!head){this.head = this.tail = node;return false;}
        this.tail = tail.next = node;
    }

    get(idx: number): Node<T>{
        return this._getByIdx(idx);
    }

    _getByIdx(idx: number): Node<T>{
        let node = this.head;
        let i = 0;
        while(i < idx){
            if(!node){throw new Error(`Reference Error: Node[${idx}] is not defined`)}
            node = node.next;
            i++;
        }
        return node;
    }

    pop(): Node<T>{
        let node = this.head;
        let next = node.next;
        while(node.next.next){
            node = next;
            next = node.next;
        }
        node.next = null;
        return next;
    }

    shift(): Node<T>{
        let head = this.head;
        this.head = head.next;
        head.next = null;
        return head;
    }

    unshift(data: T): Node<T>{
        let prevHead = this.head;
        this.head = new Node(data);
        this.head.next = prevHead;
        return this.head;
    }

    insert(data: T, idx: number): Node<T> {
        let nodeBefore = this._getByIdx(idx-1);
        let nodePushedUp = nodeBefore.next;
        let newNode = new Node(data);
        nodeBefore.next = newNode;
        newNode.next = nodePushedUp;

        return newNode;
    }

    map(cb: Function): any[]{
        let node = this.head;
        let idx = 0;
        let arr: any[] = [];
        while(node){
            arr[idx] = cb(node, idx);
            node = node.next;
            idx++;
        }
        return arr;
    }
}

export default LinkedList;