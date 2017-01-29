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

	public find(num: number, cb: Function): any{
		let thatNode: any = null;
		this.inorder(this.root, function(node:any){
			if(node.data == num){
				thatNode = node;
			}
		});
		return thatNode
	}

	public remove(num: number): void {
		let parentNode: any = null;
		let prevNode: any = null;
		let shouldRemoved: any;
		this.preorder( this.root, (node: any) => {
			if ( node.data == num ) {
				shouldRemoved = node;
				parentNode = prevNode;
			}
			prevNode = node;
		});

		log("parentNode: ", parentNode);
		log("shouldRemoved: ", shouldRemoved);

		if(!shouldRemoved){
			log('no node found');
			return;
		}

		let isLeft: boolean = parentNode.left && parentNode.left.data == shouldRemoved.data;

		if (shouldRemoved.right && shouldRemoved.left) {

		} else if (shouldRemoved.left || shouldRemoved.right){
			log('[either left or right node found]');
			parentNode[isLeft ? 'left' : 'right'] = null;
		} else {
			log('[neither left or right node found]');
			parentNode.right = parentNode.left = null;
		}
	}
}