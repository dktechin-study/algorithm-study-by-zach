/// <reference path="../node_modules/@types/colors/index.d.ts"/>
import 'colors'
import Node from './node'
import Log from '../util/colorLog'

const log = Log('cyan');

export default class BST {
	public root: any;
	public isBalanced: boolean;
	constructor(){
		this.root = null;
		this.isBalanced = false;
	}

	public insert(data: number):void{
		let n = new Node(data, null, null);
		if(this.root == null){
			this.root = n;
			return;
		}
		let current = this.root;
		let parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if(current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}

	private inorder(node: any, callback: Function): void{
		if( node != null ) {
			this.inorder(node.left, callback);
			callback(node);
			this.inorder(node.right, callback);
		}
	}

	private preorder(node: any, callback: Function): void{
		if( node != null ) {
			callback(node);
			this.preorder(node.left, callback);
			this.preorder(node.right, callback);
		}
	}

	private postorder(node: any, callback: Function): void{
		if( node != null ) {
			this.postorder(node.left, callback);
			this.postorder(node.right, callback);
			callback(node);
		}
	}

	public getMin(node: any) :any {
		while(node.left != null){
			node = node.left;
		}
		return node;
	}

	public getMax(node:any) : any {
		while(node.right != null){
			node = node.right;
		}
		return node;
	}

	public find(num: number, cb: Function): any{
		let currentNode: any = this.root;
		while(currentNode != null && currentNode.data != num){
			currentNode = num < currentNode.data ? currentNode.left : currentNode.right;
		}
		return currentNode || null;
	}

	private _remove(node: any, data: number) :any{
		if(node == null){return null;}
		if(node.data != data){
			if(node.data > data) {
				// log('to left');
				node.left = this._remove(node.left, data);
			}else{
				// log('to right');
				node.right = this._remove(node.right, data);
			}
		} else {
			if(!node.left && !node.right) {
				// log('1. node has no children');
				return null;
			}
			
			if(!node.left){
				// log('2. node has child to the right');
				return node.right;
			}
			if (!node.right){
				// log('2. node has child to the left');
				return node.left;
			}
			// log('3. node has both children');
			let hoisted = this.getMax(node.left);
			hoisted.left = this._remove(node.left, hoisted.data);
			hoisted.right = node.right;
			// log("hoisted: ", hoisted);
			return hoisted;
		}
	}

	public remove(num: number): any {
		return this._remove(this.root, num);
	}
}